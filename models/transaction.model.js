const { default: mongoose } = require("mongoose");

const transactionSchema=new mongoose.Schema({

     userId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"User",
          required:true
     },
     transactionType:{
          required:true,
          type:String,
          enum:["onramp","invest","return","withdraw"],

     },
     metaData:{
          type:Object,
          default:{}

     },
     amount:{
          type:Number,
          required:true

     }
})