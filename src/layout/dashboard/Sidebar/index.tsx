import {
  faDashboard,
  faUsers,
  faFile,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

// Mengimpor ikon dari React Icons

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Header dengan hamburger button */}

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 min-h-screen fixed md:static z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <a href="/admin" className="flex items-center p-6 text-xl">
          <img
            src="/asset/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ARONE
          </span>
        </a>
        <hr />
        {/* Navigation */}
        <nav className="mt-10">
          <Link
            to="/admin"
            className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors duration-200 space-x-4"
          >
            <FontAwesomeIcon
              icon={faDashboard}
              className="text-md text-purple-500"
            />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link
            to="/admin/pengguna"
            className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors duration-200 space-x-4"
          >
            <FontAwesomeIcon
              icon={faUsers}
              className="text-md text-purple-500"
            />
            <span className="text-sm font-medium">User</span>
          </Link>
          <Link
            to="/admin/artikel"
            className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors duration-200 space-x-4"
          >
            <FontAwesomeIcon
              icon={faFile}
              className="text-md text-purple-500"
            />
            <span className="text-sm font-medium">Artikel</span>
          </Link>
          <Link
            to="/admin/komentar"
            className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors duration-200 space-x-4"
          >
            <FontAwesomeIcon
              icon={faComment}
              className="text-md text-purple-500"
            />
            <span className="text-sm font-medium">Komentar</span>
          </Link>
        </nav>
      </div>

      {/* Overlay untuk menutup sidebar pada mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
