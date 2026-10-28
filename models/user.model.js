import mongoose from "mongoose";

const userSchema=  new mongoose.Schema({
     username:{
          type:String,
          required:true,
          unique:true

     },
     password:{
          type:String,
          required:true,
          select:false
     },
    
     balance:{
          type:Number,
          default:50
     },
    
})

export const User=mongoose.model("User",userSchema)