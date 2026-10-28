import { Market } from "../models/market.model"

export const addMarket=async (req,res) => {

     try {
          const market=await Market.create(req.body)
          res.status(201).json({message:"maret is created"})
     } catch (error) {
          res.status(500).json({
               message:"market add failed "
          })
     }
     
}