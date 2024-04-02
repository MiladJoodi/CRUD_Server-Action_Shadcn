"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";


interface UserInput{
  name: string,
  email: string,
}

function RegisterForm() {
  // React Hook Form Start
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInput>();

  const onSubmit = (data) => {
    console.log("data");
  };

  // React Hook Form End

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="  flex flex-col gap-3   w-full shadow-lg p-6  rounded-md"
    >
      <Input
        {...register("name", {
          required: true,
          minLength: 2,
          maxLength: 20,
        })}
        type="text"
        placeholder="Your name"
      />
      {errors.name && errors.name.type === "required" && (
                  <p>
                    {errors.name?.message}
                  </p>
                )}


      <Input
        {...register("email", {
          required: "Please enter your email",
          minLength: 5,
          maxLength: 20,
        })}
        type="email"
        placeholder="Your email"
        name="email"
      />
      <Button>Submit</Button>
    </form>
  );
}

export default RegisterForm;
