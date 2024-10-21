import { Helmet } from "react-helmet-async";

import Statistic from "./card";
import LineChart from "../../components/LineChart";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Ini adalah halaman pelayanan " />
      </Helmet>
      <div className="pt-16 mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome to the admin dashboard.</p>
      </div>

      <Statistic />
      <LineChart />
    </>
  );
};

export default index;
