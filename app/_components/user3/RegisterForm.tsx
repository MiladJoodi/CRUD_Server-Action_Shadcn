"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/actions/user3";

const RegisterForm = () => {
  // const sleep = (ms:number) => new Promise(response => setTimeout(response, ms));
  // await sleep(5000)

  return (
    <form
      action={registerUser}
      className=" flex flex-col gap-3  w-full shadow-lg p-6  rounded-md"
    >
      <div className="flex flex-col gap-1">
        <Input type="text" placeholder="Your name" name="name" required />
      </div>

      <div className="flex flex-col gap-1">
        <Input type="email" placeholder="Your email" name="email" required />
      </div>

      <Button>Submit</Button>
    </form>
  );
};

export default RegisterForm;
