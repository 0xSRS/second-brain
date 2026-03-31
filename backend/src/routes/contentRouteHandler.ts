import { Router, Request, Response } from "express";
import auth from "./middleware"
import { ContentModel } from "../modals/ContentModel";

const router = Router()

router.post("/v1/add", auth, async (req: Request, res: Response) => {
    const { title, link, description, type } = req.body

    try {
        const userId = req.userId
        //@ts-ignore
        await ContentModel.create({title, link, description,type,userId})
        res.json({msg:"Content added sucessfully"})
    } catch (e) {
        console.error("Unable to add content")
        res.json({msg:"Unable to add content"})
    }

})

router.get("/v1/view", auth,async (req: Request, res: Response) => {
    
    try{    
        const userId = req.userId
        //@ts-ignore
        const users = await ContentModel.find({userId}).populate("userId","name email")
        if(!users){
            res.json("No content added yet")
        }
        res.json(users)
    }catch{
        res.json("Unable to view the content")
    }

})

export default router