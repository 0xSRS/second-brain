import { Schema, model } from "mongoose";

interface IUser{
    email:string,
    name:string,
    password:string
}

const UserSchema = new Schema<IUser>({
    email:{type:String, required:true, unique:true},
    name:{type:String, required:true},
    password:{type:String, required:true}
})

export const UserModel = model("users",UserSchema)