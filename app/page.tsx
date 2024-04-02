import Image from "next/image";
import NewUserForm from "./_components/users/NewUserForm";

export default function Home() {
  return (
   <main className="py-10">
        <h1 className="text-3xl font-black text-center">User Registeration</h1>
        <NewUserForm />
   </main>
  );
}
