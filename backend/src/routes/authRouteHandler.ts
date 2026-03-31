import { Router, Request, Response } from "express";
import { UserModel } from "../modals/UserModel";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = Router()

router.post("/v1/signup", async (req: Request, res: Response) => {
    try {
        const { email, name, password } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10)
            await UserModel.create({ email, name, password: hashedPassword })
            res.json("User has been added")
        } else {
            res.json({ msg: "User already exists" })
        }
    } catch (e) {
        console.error("Error : Unable to connect to DB during Signup")
    }
})

router.post("/v1/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })

        const SECRET_KEY = process.env.SECRET_KEY
        if (!SECRET_KEY) {
            console.error("ERROR : SECRET_KEY env variable not present")
            res.status(500).json({ msg: "Internal server configuration error" })
        }

        if (user) {
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                const token = jwt.sign({ userId: user._id }, SECRET_KEY!)
                res.json({ msg: "Successfully logged in ", token })
            }
        } else {
            res.json({ msg: "User does not exist" })
        }
    }catch(e){
        console.error("Error : Unable to connect to DB during Login")
    }
})

export default router