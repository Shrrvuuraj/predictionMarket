import z from "zod"

const betZodSchema=z.object({
     betamount:z.number().positive(),
     userId:z.string().min(1),
     marketId:z.string().min(1)

});
export default betZodSchema;