import z from "zod";

const marketZodSchemaa=z.object({

     title:z.string().min(2).max(100),
     intialwager:z.number(),
     bet:z.enum(["yes","no"]),
     expiry:z.coerce.date(),
     resolution:z.boolean()

})
export default marketZodSchemaa;