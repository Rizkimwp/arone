import Header from "./header";
import Footer from "./footer";
import WhatsappButton from "../components/WhatsappButton";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main content */}
      <Outlet />
      <WhatsappButton />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default BaseLayout;
