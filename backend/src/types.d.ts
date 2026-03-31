import { Request } from "express";

declare global{
    namespace Express{
        interface Request{
            headers:{
                token?:string
            }
            userId?: string;
        }
    }
}