import React from "react";
import { PageProps } from "gatsby";
import Header from "./header";

export default function Layout({}: PageProps) {
  return (
    <div className="z-10 fixed w-full h-16">
      <Header />
    </div>
  );
}
