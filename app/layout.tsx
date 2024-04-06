import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRUD Server Action",
  description: "Next.js 14 CRUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-200 px-5`}>
        <main className="bg-white max-w-5xl px-5 mx-auto min-h-[100dvh] py-10 gap-10 flex flex-col">
          <ul className="w-full bg-slate-950 text-white flex flex-row gap-5 uppercase">
            <li>
              <Link href={"/new3"} className="py-2 px-5 flex hover:text-slate-300">
              Home</Link>
            </li>
            <li>
              <Link href={"/user"} className="py-2 px-5 flex hover:text-slate-300">
              User</Link>
            </li>
          </ul>

          {children}
        </main>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 10000,
          }}
        />
      </body>
    </html>
  );
}
