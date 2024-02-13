import express from 'express'
import { connectDb } from './app/config/connection.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config({ path: './.env' })
const app=express()
app.use(express.json())
app.use(cookieParser())


//importing the Routers

import authRouter from './route/auth.js'
import userRouter from './route/users.js'
import commentRouter from './route/comments.js'
import videoRouter from './route/videos.js'

//using the routers
app.use('/api/auth/',authRouter)
app.use('/api/users/',userRouter)
app.use('/api/videos/',videoRouter)

const startServer=async()=>{
    console.log("Inside Start Server")
    const uri=process.env.MONGO_URI
    await connectDb(uri)
    app.listen(process.env.PORT,()=>console.log(`Server listening`))
}
startServer()