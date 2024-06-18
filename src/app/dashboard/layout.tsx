import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "../globals.css";
import { NavBar } from "@/components/NavBar";




//const inter = Inter({ subsets: ["latin"] });
//const styles = `bg-slate-950 text-white ${inter.className}`

export const metadata: Metadata = {
  title: "My Blog",
  description: "My Blog",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
