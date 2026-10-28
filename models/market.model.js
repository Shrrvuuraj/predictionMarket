import mongoose from "mongoose";

const marketSchema=new mongoose.Schema({
     title:{
          type:String,
          required:true
     },
     intialwager:{
          type:Number,
          required:true
     },
     bet:{
          type:String,
          required:true,
          enum:["yes","no"]
     },
     expiry:{
          type:Date,
          required:true
     },
     resolution:{
          type:Boolean,
          default:false
     }
     
})

export const Market = mongoose.model("Market",marketSchema)