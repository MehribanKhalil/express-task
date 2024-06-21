import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import { returnTimeMiddleware } from "./src/middleware/returnTimeMiddleware.js"
import router from "./src/router/newsRouter.js"

const app= express()

dotenv.config()

//Middleware
app.use(express.json())
app.use(cors())
app.use(returnTimeMiddleware)

app.use('/api/news',router)

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('Server is running');
})
