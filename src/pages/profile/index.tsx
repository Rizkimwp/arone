import { Helmet } from "react-helmet-async";
import Hero from "./hero";

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
