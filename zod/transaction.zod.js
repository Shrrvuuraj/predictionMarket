import z from "zod"

const betZodSchema=z.object({
     userId:z.string().min(1),
     transactionType:z.enum(["onramp","invest","return","withdraw"])
     ,
     metaData:z.record(z.string(), z.unknown()),
     amount:z.number().positive()
})