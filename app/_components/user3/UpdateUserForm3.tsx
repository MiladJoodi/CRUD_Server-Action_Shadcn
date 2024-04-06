"use client";
import { Input } from "@/components/ui/input";
import { updateUser } from "@/app/_components/user3/Action3";
import ActionButton3 from "./ActionButton3";
import toast from "react-hot-toast";
import { useRef, useState } from "react";

interface IProps {
  user: IUSER;
}

const UpdateUserForm : React.FC<IProps> = ({user}) => {

  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")
  
  const ref = useRef<HTMLFormElement>(null);

  const onSubmit = async (formData: FormData) => {
    const response = await updateUser(formData);
    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success("updated successfully");
      ref.current?.reset();
    }
  }

  return (
    <form
      ref={ref}
      action={onSubmit}
      className=" flex flex-col gap-3  w-full shadow-lg p-6  rounded-md"
    >
      <input type="hidden" name="id" value={user?._id} />
      <div className="flex flex-col gap-1">
        <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your name" name="name" required />
      </div>

      <div className="flex flex-col gap-1">
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Your email" name="email" required />
      </div>

      <ActionButton3 title="Update" />
    </form>
  );
};

export default UpdateUserForm;
