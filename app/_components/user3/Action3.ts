"use server"

import dbConnect from "@/dbConnect/dbConnect"
import User from "@/models/User";
import { revalidatePath } from "next/cache";

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
        revalidatePath("/new3")
        // console.log(saveuser)
    } catch (error) {
        return {
            error: "There was an error saving"
        }
    }
}

// Get users
export const getUser = async ()=>{
    try {
        await dbConnect();
        const response = await User.find().exec();
        console.log(response)
        return response;
    } catch (error) {
        return {
            error: "There was an error saving"
        }
    }
}