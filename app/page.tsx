import Image from "next/image";
import NewUserForm from "./_components/users/NewUserForm";
import UserList from "./_components/users/UserList";

export default function Home() {
  return (
   <main className="py-10 max-w-[500px] mx-auto">
        <h1 className="text-3xl font-black">User Registeration</h1>
        <NewUserForm />
        <UserList />
   </main>
  );
}
