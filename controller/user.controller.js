import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"


const saltRound =10;


export const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const hashedpassword=await bcrypt.hash(password,saltRound)

    const user = await User.create({ username, password:hashedpassword });
    res.status(201).json({ message: `${username} is  created` });
  } catch (error) {
    res.status(500).json({
      message: `${req.body.username} is already created choose something else`,
    });
  }
};

export const login = async(req, res) => {

     try {
          const {username,password}=req.body;
          const user=await User.findOne({username}).select("+password")
          


          if(!user){
               return res.status(400).json({
                    message:"this user is not avaible go to sigin page"
               })
          }
          const isMatch= await bcrypt.compare(password,user.password)
          if(!isMatch){
               return res.status(400).json({
                    message:"the password is incorrect "
               })
          }

          // removing user password
          const userData=user.toObject()
          delete userData.password
          res.status(201).json({
               message:`${username} is welcome`,
               data:userData
          })
        

     } catch (error) {
          res.status(500).json({error:error})
     }
};
