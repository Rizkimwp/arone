import { Helmet } from "react-helmet-async";
import Contact from "./hero";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Arone - Kontak</title>
        <meta name="description" content="Ini adalah halaman pelayanan " />
      </Helmet>
      <Contact />
    </>
  );
};

export default index;
