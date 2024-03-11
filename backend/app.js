import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import postRoutes from './routes/post.routes.js'

const app = express()
const port = 8000
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db connected!"))
  .catch((error) => console.log("Db connection error", error))

app.use(cors())
app.use(express.json())

app.use('/api/posts',postRoutes)

app.get('/api/test',async(req,res)=>{
  res.status(200).json({message:"hello"})
})

process.on("SIGINT", async function () {
  await mongoose.disconnect()
  process.exit(0)
})

app.use((error,req,res)=>{
  const statusCode=error.statusCode||404
  const message=error.message||"Something went wrong"
  return res.status(statusCode).json({message})
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})