import Header from "./header";
import Footer from "./footer";
import WhatsappButton from "../components/WhatsappButton";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchGlobalData, GlobalData } from "../service/apiServices";

const BaseLayout = () => {
  const { data: globalData } = useQuery<GlobalData>({
    queryKey: ["globalData"], // queryKey harus didefinisikan di dalam object
    queryFn: fetchGlobalData, // queryFn adalah fungsi untuk fetch data
  });
  return (
    <>
      {/* Header */}
      <Header header={globalData?.siteName} />

      {/* Main content */}
      <Outlet />
      <WhatsappButton />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default BaseLayout;
