"use server"

import User from "@/models/User";
import dbConnect from "../dbConnect/dbConnect"
import { revalidatePath } from "next/cache";
import { z } from "zod"

// Create new user
export const createNewUser = async (formData: FormData) => {
    // zod
    const schema = z.object({
        name: z.string().min(3),
        email: z.string().min(4)
    })
    const parse = schema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
    })
    if(!parse.success){
        // console.log(parse.error)
        return {message: 'form data is not valid'}
    }

    const data = parse.data

    try {

        // Sleep
        await new Promise(resolve => setTimeout(resolve, 2000))

        await dbConnect();

        // const data = {
        //     name: formData.get("name"),
        //     email: formData.get("email"),
        // }
        const saveUser = await new User(data).save()
        revalidatePath("/")
        // console.log(saveUser)

    } catch (error) {
        // console.log(error)
    }
}

// Show users
export const showerUsers = async () => {
    try {
        dbConnect();
        const response = await User.find().exec();
        return response
    } catch (error) {
        // console.log(error)
    }
}