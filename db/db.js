import mongoose from "mongoose";

export const connectToDB=async()=>{
     await mongoose.connect(process.env.CONNETION_STRING)
     console.log("the database is conneted")
}