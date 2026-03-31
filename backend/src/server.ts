import 'dotenv/config';
import express from "express"
import cors from "cors"
import authRouteHandler from "./routes/authRouteHandler"
import contentRouteHandler from "./routes/contentRouteHandler"
import mongoose from 'mongoose'

async function start(){
    try{
        const DB_URL = process.env.DB_URL
        if(!DB_URL){
            console.error("Error: DB_URL env variable not present")
        }
        await mongoose.connect(DB_URL!)

        const PORT = process.env.PORT
        if(!PORT){
            console.error("Error: PORT env variable not present")
        }
        app.listen(PORT!,()=>{
            console.log(`Listening on Port ${PORT}`)
        })
    }catch(e){
        console.error("Error : Unable to establish connection with Database")
    }
}

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth",authRouteHandler)
app.use("/api/content",contentRouteHandler)

start()