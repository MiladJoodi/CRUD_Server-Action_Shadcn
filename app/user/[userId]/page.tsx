import { getUserById } from "@/app/_components/user3/Action3";
import UpdateUserForm from "@/app/_components/user3/UpdateUserForm3";
import React from "react";

async function EditUserPage({ params }: { params: { userId: string } }) {
  const id = params?.userId as string;
  const userInformation = await getUserById(id);
  const user = userInformation && JSON.parse(JSON.stringify(userInformation))
  console.log(userInformation)

//   console.log(userInformation)

  return (
    <div className="w-full h-[100dvh] flex flex-col gap-4 justify-start items-center max-w-[500px] p-3 py-6 mx-auto">
      <h2 className="text-3xl font-bold">Edit</h2>

      {userInformation && <UpdateUserForm user={user} />}
    </div>
  );
}

export default EditUserPage;
