import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <>
      <Link
        to="#"
        className="flex items-center  bg-blue-500 items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-yellow-50 hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        <FontAwesomeIcon icon={faAdd} className="text-md text-white" />
        <span className="text-sm font-medium">Artikel Baru</span>
      </Link>
    </>
  );
};

export default AddButton;
