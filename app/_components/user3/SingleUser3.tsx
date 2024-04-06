import { Button } from "@/components/ui/button";
import React from "react";
import DeleteButton from "./DeleteButton3";
import Link from "next/link";

type UserProps = {
  user: IUSER;
};

const SingleUser3: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-12 py-2 items-center p-2 border-b gap-4">
      <div className="col-span-6 flex flex-col">
        <div>{user?.name}</div>
        <div className="text-xs text-slate-400">{user?.email}</div>
        <div className="text-xs text-slate-400">{user?._id.toString()}</div>
      </div>
      <div className="col-span-3">
        <Link href={`user/${user?._id}`} className="bg-slate-900 text-white p-2 w-full flex items-center justify-center text-center rounded-md shadow-md hover:shadow-xl hover:bg-slate-700">Edit</Link>
      </div>

      <DeleteButton id={user?._id.toString()} />
    </div>
  );
}

export default SingleUser3;
