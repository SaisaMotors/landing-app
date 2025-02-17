import Footer from "@/components/Footer/index";
import Header from "@/components/Header";
import React from "react";

interface Prop {
  children: React.ReactNode;
}
const Layout = ({ children }: Prop) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
