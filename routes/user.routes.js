import { Router} from "express";
import { login, signin } from "../controller/user.controller.js";
import { userValidate} from "../zod/main.js";

const user=Router()
//  i can use same validate funtion for both login and signup its a basic crud app
user.post("/signin",userValidate,signin)
user.post("/login",userValidate,login)

export default user