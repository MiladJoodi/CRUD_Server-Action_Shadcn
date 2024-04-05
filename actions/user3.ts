"use server"

import dbConnect from "@/dbConnect/dbConnect"
import User from "@/models/User";

// import { z } from "zod"

//   Zod
// const schema = z.object({
//     name: z.string().min(3),
//     email: z.string().email().min(4)
// })

// Register
export const registerUser = async (formData: FormData) => {
    // const { name, email} = Object.fromEntries(formData);

    try {
        await dbConnect();
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
        }
        const saveuser = await new User(data).save();
        console.log(saveuser)
    } catch (error) {
        console.log(error)
    }


}