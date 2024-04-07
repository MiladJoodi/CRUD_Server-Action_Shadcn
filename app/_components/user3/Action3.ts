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
export const getUser = async () => {
    try {
        await dbConnect();
        const response = await User.find().exec();
        // console.log(response)
        return response;
    } catch (error) {
        return {
            error: "There was an error saving"
        }
    }
}

// Delete server side
export const deleteUser = async (formData: FormData) => {
    try {
        await dbConnect();
        const data = {
            id: formData.get("id")
        }
        const result = await User.findByIdAndDelete(data?.id);
        revalidatePath("/")
    } catch (error) {
        return {
            error: "There wa an error deleting"
        }
    }
}

// Delete CLient side with Confirm
export const deleteUserWithConfirm = async (id: string) => {
    try {
        await dbConnect();
        const result = await User.findByIdAndDelete(id);
        revalidatePath("/")
    } catch (error) {
        return {
            error: "There wa an error deleting"
        }
    }
}

// get User By Id
export const getUserById = async (id: string) => {
    try {
        await dbConnect();

        const response = await User.findOne({ _id: id })
        return response;
    } catch (error) {

    }
}

// Update User
export const updateUser = async (formData: FormData) => {
    // const { name, email} = Object.fromEntries(formData);

    try {
        await dbConnect();
        const id = formData.get("id")

        // User Exist
        const isUserExist = await User.findOne({ _id: id })
        if (!isUserExist) {
            return {
                error: "User not found"
            }
        }else{
            const name = formData.get("name")
            const email = formData.get("email")

            const response = await User.findByIdAndUpdate(id, {
                $set: {name, email}},
                {new: true}
        )

        if (!response){
            return {
                error: "User not updated"
            }
        }else{
            revalidatePath(`/user/${id}`)
        }
        }

    } catch (error) {
        return {
            error: "There was an error saving"
        }
    }
}