
import { addMarket } from "../controller/market.controller.js";
import { marketValidate } from "../zod/main";
import { Router } from "express";

const marketRouter=Router()

marketRouter.post("/",marketValidate,addMarket)



