import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Hero from "./hero";
import Detail from "../home/detail";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default index;
