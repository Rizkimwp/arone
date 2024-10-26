import { Helmet } from "react-helmet-async";
import Artikel from "./hero";
import Detail from "./detail";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Artikel</title>
        <meta name="description" content="Ini adalah halaman pelayanan " />
      </Helmet>
      <Artikel />
      <Detail />
    </>
  );
};

export default index;
