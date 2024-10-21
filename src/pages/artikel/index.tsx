import { Helmet } from "react-helmet-async";
import TableThree from "../../components/Table";
import AddButton from "./button";
import { useState } from "react";
import Form from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isAdd, setIsAdd] = useState(false);
  const toggleSidebar = () => {
    setIsAdd(!isAdd);
  };
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

          {!isAdd ? (
            <AddButton
              isAdd={toggleSidebar}
              icon={<FontAwesomeIcon icon={faAdd} className="text-xl" />}
              title="Artikel Baru"
              bgColor="bg-blue-500"
            />
          ) : (
            <div className="flex space-x-4">
              <AddButton
                isAdd={toggleSidebar}
                icon={<FontAwesomeIcon icon={faClose} className="text-xl" />}
                title="Batal"
                bgColor="bg-red-500"
              />
              <AddButton
                isAdd={toggleSidebar}
                icon={<FontAwesomeIcon icon={faCheck} className="text-xl" />}
                title="Simpan"
                bgColor="bg-green-500"
              />
            </div>
          )}
        </div>

        {/* Deskripsi atau Informasi Tambahan */}
        <p className="text-gray-500">
          Manage your articles easily with this interface.
        </p>
      </div>
      {isAdd ? <TableThree /> : <Form />}
    </>
  );
};

export default index;
