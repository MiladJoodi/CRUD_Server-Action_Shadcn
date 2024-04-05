"use server"
// import { FormData } from "@/app/_components/user2/RegisterForm"
import { z } from "zod"

//   Zod
const schema = z.object({
    name: z.string().min(3),
    email: z.string().email().min(4)
})


// Register
export const registerUser = async (formData: FormData) => {

    // const {name, email} = Object.fromEntries(formData);

    // const name = formData.get("name");
    // const { name, email } = formData;

    // const parse = schema.safeParse({
    //     name: formData.get("name"),
    //     email: formData.get("email"),
    // })
    // if(!parse.success){
    //     console.log(parse.error)
    // }

}