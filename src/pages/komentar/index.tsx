import { Helmet } from "react-helmet-async";
import TableThree from "../../components/Table";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Komentar</title>
        <meta name="description" content="Ini adalah halaman pelayanan " />
      </Helmet>
      <div className="pt-16 mb-6">
        <h1 className="text-3xl font-bold">Komentar</h1>
        <p className="text-gray-500"></p>
      </div>
      <TableThree />
    </>
  );
};

export default index;
