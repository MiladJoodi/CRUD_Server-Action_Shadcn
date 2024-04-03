"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { registerUser } from "@/actions/user2";

export interface UserInput {
  name: string;
  email: string;
}

 const RegisterForm:React.FC = ()=> {
  // React Hook Form Start
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<UserInput>();

  const onSubmit = async (data: FormData) => {
    await registerUser(data) 
    console.log(data);
  };

  // React Hook Form End

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col gap-3   w-full shadow-lg p-6  rounded-md"
    >
      <div className="flex flex-col gap-1">
        <Input
          {...register("name", {
            required: "Sorry, name is required",
            minLength: 2,
            maxLength: 20,
          })}
          type="text"
          placeholder="Your ame"
        />
        {errors.name && errors.name.type === "required" && (
          <p className="text-red-500">{errors.name?.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
      <Input
        {...register("email", {
          required: "Please enter your email",
          minLength: 5,
          maxLength: 20,
        })}
        type="email"
        placeholder="Your email"
      />
        {errors.email && errors.email.type === "required" && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
      </div>

      <Button>Submit</Button>
    </form>
  );
}

export default RegisterForm;
