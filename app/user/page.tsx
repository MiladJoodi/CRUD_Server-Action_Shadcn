import React from "react";
import RegisterForm from "../_components/user3/RegisterForm";
import UserList3 from "../_components/user3/UserList3";
import UserSearch from "../_components/user3/UserSearch";

function New({searchParams} : {searchParams: {search: string | undefined}}) {

  const search = typeof searchParams?.search === "string" ? searchParams?.search : undefined

  console.log(search)
  
  return (
    <div className="w-full h-[100dvh] flex flex-col gap-4 justify-start items-center max-w-[500px] p-3 py-6 mx-auto">
      <h2 className="text-3xl font-bold">Register</h2>
      <RegisterForm />
      <UserSearch search={search} />
      <UserList3 search={search} />
    </div>
  );
}

export default New;
