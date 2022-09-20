import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import loginRoute from './routes/login.js'
const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())

app.use("/",loginRoute)
app.listen(8080,()=>{
    console.log("connected to backend");
})
