import { Bets } from "../models/bets.model";

export const postBet = async (req, res) => {
  try {
    const bet =await  Bets.create(req.body);
    res.status(200).json({message:"the bet is created"})
  } catch (error) {
     res.status(500).json({error:error})
  }
};


export const getAllBet=async (req,res) => {
    try {
      user=await Bets.find({})
     res.status(200).json({message:"all bets are fetched"})
    } catch (error) {
          res.status(500).json({
               message:"get all bet failed ",
               error
          })
    }
     
}