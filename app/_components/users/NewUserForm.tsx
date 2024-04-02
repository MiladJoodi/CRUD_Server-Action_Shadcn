import { createNewUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import ActionButton from "./ActionButton";

function NewUserForm() {
  return (
    <div className="flex">
      <form
        action={createNewUser}
        className="flex flex-col gap-5 border p-5 shadow-lg bg-white my-10 max-w-[500px] w-full"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Your Name</label>
          <Input required type="text" name="name" id="" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Your Email</label>
          <Input required type="email" name="email" id="" />
        </div>

        <ActionButton title="Submit" />

      </form>
    </div>
  );
}

export default NewUserForm;
