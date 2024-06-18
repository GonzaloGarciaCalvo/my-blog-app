import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AuthProvider } from "@/components/authProvider";
import { NavBarAuth } from "@/components/NavBarAuth";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "My Blog",
};

export default function ControlPanelLayout({
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
