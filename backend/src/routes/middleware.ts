import { NextFunction, Request, Response } from "express";
import jwt,{JwtPayload} from 'jsonwebtoken'

interface TokenPayload extends JwtPayload{
    userId:string
}

export default function auth(req: Request, res: Response, next: NextFunction) {
    const { token } = req.headers
    if (!token) {
        res.json({ msg: "You are not logged in" })
    } else {
        const SECRET_KEY = process.env.SECRET_KEY
        if (!SECRET_KEY) {
            console.error("ERROR : SECRET_KEY env variable not present")
        }
        jwt.verify(token as string, SECRET_KEY as string, (error, data) => {
            if (error) {
                console.error("Error: JWT verification failed");
                return res.status(403).json({ msg: "Invalid token" });
            }

            // const decoded = data as {userId:string}
            // req.userId = decoded.userId
            req.userId = (data as TokenPayload).userId;
            next()

        })
    }
}
