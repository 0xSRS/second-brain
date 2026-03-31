import { Schema, model, Types } from "mongoose";

interface IContent{
    title:string,
    link:string,
    type:"youtube" | "X",
    description?:string,
    userId:Types.ObjectId
}

const ContentSchema = new Schema<IContent>({
    title:{type:String,required:true},
    link:{type:String,required:true},
    type:{type:String,required:true},
    description:{type:String},
    userId:{type:Schema.Types.ObjectId , ref:"users"}
})

export const ContentModel = model("contents",ContentSchema)