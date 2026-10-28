import mongoose from "mongoose"

const betSchema= new mongoose.Schema({

     betamount:{
          type:Number,
          required:true,

          
     },
     userId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"User",
          required:true
     }
     ,
     marketId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Market",
          required:true
     }
})

export const Bets=mongoose.model("Bets",betSchema)