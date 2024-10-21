import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header
      className={`bg-white shadow-md h-16 flex items-center justify-between px-6 fixed w-full z-10 top-0 ${
        isSidebarOpen ? "left-64" : "left-0"
      } transition-all duration-300`}
    >
      {/* Tombol Hamburger untuk mobile */}
      <button
        onClick={toggleSidebar}
        className="text-gray-800 focus:outline-none md:hidden"
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>

      <div className="text-xl font-semibold ml-2">Admin Dashboard</div>

      <div className="flex items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
