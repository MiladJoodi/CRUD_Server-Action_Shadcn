
import React from "react";
import RegisterForm from "../_components/user3/RegisterForm";
import UserList3 from "../_components/user3/UserList3";

function New() {
  return (
    <div className="w-full h-[100dvh] flex flex-col gap-4 justify-start items-center max-w-[500px] p-3 py-6 mx-auto">
        <h2 className="text-3xl font-bold">Register</h2>
        <RegisterForm />
        <UserList3 />
    </div>
  );
}

export default New;
