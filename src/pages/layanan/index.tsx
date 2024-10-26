import { Helmet } from "react-helmet-async";
import Layanan from "./hero";

import Contact from "../home/contact";
import Detail from "./detail";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Layanan</title>
        <meta name="description" content="Ini adalah halaman pelayanan " />
      </Helmet>
      <Layanan />
      <Detail />
      <Contact />
    </>
  );
};

export default index;
