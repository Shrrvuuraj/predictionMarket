import z from "zod"

const transactionZodSchema=z.object({
     userId:z.string().min(1),
     transactionType:z.enum(["onramp","invest","return","withdraw"])
     ,
     metaData:z.record(z.string(), z.unknown()),
     amount:z.number().positive()
})
export default transactionZodSchema;