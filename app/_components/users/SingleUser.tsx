import { Button } from "@/components/ui/button";
import React from "react";

interface IProps {
  user: IUSER;
}

const SingleUser: React.FC<IProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-12 border-b py-2">
      <div className="col-span-4 capitalize">{user?.name}</div>
      <div className="col-span-5 capitalize">{user?.email}</div>
      <div className="col-span-3 capitalize">
        <Button className="w-full">Delete</Button>
      </div>
    </div>
  );
};

export default SingleUser;
