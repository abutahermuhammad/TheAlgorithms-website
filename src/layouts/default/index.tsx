import Footer from "src/components/footer";
import Navbar from "src/components/navbar";
import React, { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
