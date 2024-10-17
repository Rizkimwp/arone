import React, { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import WhatsappButton from "../components/WhatsappButton";

const BaseLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main content */}
      {children}
      <WhatsappButton />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default BaseLayout;
