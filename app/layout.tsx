import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins  = Poppins({
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
      <body className={`${poppins .className} bg-gray-200 px-5`}>
        <main className="bg-white max-w-5xl px-5 mx-auto min-h-[100dvh]">
        {children}
        </main>
        </body>
    </html>
  );
}
