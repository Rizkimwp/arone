import React from "react";
import Hero from "./hero";
import Block from "./block";
import { Helmet } from "react-helmet-async";

import Contact from "./contact";
import Detail from "../layanan/detail";

const index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Beranda - Arone</title>
        <meta name="description" content="Ini adalah halaman saya" />
      </Helmet>
      <Hero />
      <Block />
      <Detail />
      {/* <Price /> */}
      <Contact />
    </>
  );
};

export default index;
