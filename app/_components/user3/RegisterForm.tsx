"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/app/_components/user3/Action3";
import ActionButton3 from "./ActionButton3";
import toast from "react-hot-toast";
import { useRef } from "react";

const RegisterForm = () => {
  // const sleep = (ms:number) => new Promise(response => setTimeout(response, ms));
  // await sleep(5000)

  const ref = useRef<HTMLFormElement>(null);

  const onSubmit = async (formData: FormData) => {
    const response = await registerUser(formData);
    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success("seccess");
      ref.current?.reset();
    }
  }

  return (
    <form
      ref={ref}
      action={onSubmit}
      className=" flex flex-col gap-3  w-full shadow-lg p-6  rounded-md"
    >
      <div className="flex flex-col gap-1">
        <Input type="text" placeholder="Your name" name="name" required />
      </div>

      <div className="flex flex-col gap-1">
        <Input type="email" placeholder="Your email" name="email" required />
      </div>

      <ActionButton3 title="Submit" />
    </form>
  );
};

export default RegisterForm;
