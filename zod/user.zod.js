import  z  from "zod";

const userZodSchema=z.object(
     {
          username:z.string().min(3).max(100),
          password:z.string().min(3).max(100)
     }
)
export default userZodSchema;