import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function NewUserForm() {
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-5 border p-5 shadow-lg bg-white my-10"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Your Name</label>
          <Input required type="text" name="name" id="" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Your Email</label>
          <Input required type="email" name="email" id="" />
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default NewUserForm;
