import React from "react";
import Hero from "./hero";
import Block from "./block";
import { Helmet } from "react-helmet-async";
import Detail from "./detail";
import Price from "./price";
import Contact from "./contact";

const index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Ini adalah halaman saya" />
      </Helmet>
      <Hero />
      <Block />
      <Detail />
      <Price />
      <Contact />
    </>
  );
};

export default index;