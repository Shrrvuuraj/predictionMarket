
import betZodSchema from "./bets.zod.js";
import marketZodSchemaa from "./market.zod.js";
import transactionZodSchema from "./transaction.zod.js";
import userZodSchema from "./user.zod.js";

const validateData = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: "the data is not validated by zod ",
      });
    }
    req.body = result.data;
   

    next();
  };
};

export const userValidate=validateData(userZodSchema)
export const marketValidate=validateData(marketZodSchemaa)
export const betValidate=validateData(betZodSchema)
export const transactionValidate=validateData(transactionZodSchema)