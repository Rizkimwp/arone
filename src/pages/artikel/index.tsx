import { Helmet } from "react-helmet-async";
import TableThree from "../../components/Table";
import AddButton from "./button";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Artikel</title>
        <meta name="description" content="Ini adalah halaman pelayanan " />
      </Helmet>
      <div className="pt-20 mb-6">
        {/* Bagian Header Konten */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Artikel</h1>
          <AddButton />
        </div>

        {/* Deskripsi atau Informasi Tambahan */}
        <p className="text-gray-500">
          Manage your articles easily with this interface.
        </p>
      </div>

      <TableThree />
    </>
  );
};

export default index;
