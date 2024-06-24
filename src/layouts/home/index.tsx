import Footer from "src/components/footer";
import Jumbo from "src/components/jumbo";
import Navbar from "src/components/navbar";
import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Jumbo />
      {children}
      <Footer />
    </>
  );
}
