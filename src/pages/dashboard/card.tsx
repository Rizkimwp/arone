import Card from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSwatchbook,
  faCommentAlt,
  faUsers,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const Statistic = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        icon={
          <FontAwesomeIcon icon={faEye} className="text-yellow-500 text-3xl" />
        }
        title="Total View"
        value={1500}
        bgColor="bg-white"
      />
      <Card
        icon={
          <FontAwesomeIcon
            icon={faSwatchbook}
            className="text-yellow-500 text-3xl"
          />
        }
        title="Artikel"
        value={1500}
        bgColor="bg-white"
      />
      <Card
        icon={
          <FontAwesomeIcon
            icon={faCommentAlt}
            className="text-yellow-500 text-3xl"
          />
        }
        title="Komentar"
        value={1500}
        bgColor="bg-white"
      />
      <Card
        icon={
          <FontAwesomeIcon
            icon={faUsers}
            className="text-yellow-500 text-3xl"
          />
        }
        title="Total User"
        value={1500}
        bgColor="bg-white"
      />
    </div>
  );
};

export default Statistic;
