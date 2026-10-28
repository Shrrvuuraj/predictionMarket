import express from "express";
import 'dotenv/config';
import { connectToDB } from "./db/db.js";
import user from "./routes/user.routes.js";

const app=express();
const PORT=process.env.PORT;

// database
connectToDB()


// midllewares
app.use(express.json())
app.use("/",user)


app.listen(PORT,()=>{
     console.log("Server is up and running")
})