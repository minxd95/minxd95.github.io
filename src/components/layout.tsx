import React from "react";
import Header from "./header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="max-w-[40rem] mx-auto my-0 px-4 pt-16 pb-24 min-h-[calc(100vh-4rem)]">
        {children}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
