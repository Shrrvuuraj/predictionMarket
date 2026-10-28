import { Router } from "express";
import { betValidate } from "../zod/main";

const betRouter=Router()

betRouter.get("/",betValidate)
betRouter.post("/",betValidate)