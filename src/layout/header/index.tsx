import React, { useState } from "react";
import { Link } from "react-router-dom";

const index: React.FC<{ header: string | undefined }> = ({ header }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 dark:bg-gray-900">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img
              src="/asset/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {header?.toLocaleUpperCase()}
            </span>
          </a>
          <div className="flex items-center lg:order-3">
            {/* <!-- <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> --> */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Drawer */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 lg:hidden">
              <div className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 p-4">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Close drawer</span>
                  {/* Icon for close button */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/layanan"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Layanan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/artikel"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Artikel
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                {/* <Link
                  to="/admin"
                  className="flex items-center py-3 px-6 rounded-lg bg-blue-400 hover:bg-gray-700 transition-colors duration-200 space-x-4"
                >
                  <span className="text-sm font-medium text-white">
                    Dashboard
                  </span>
                </Link> */}
              </div>
            </div>
          )}

          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <a
                  href="/artikel"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Artikel
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2"
          >
            {/* <Link
              to="http://localhost:1337/admin"
              className="flex items-center py-3 px-6 rounded-lg bg-blue-400 hover:bg-gray-700 transition-colors duration-200 space-x-4"
            >
              <span className="text-sm font-medium text-white">Dashboard</span>
            </Link> */}
          </div>
          {/* Overlay */}
          {/* {isMobileMenuOpen && (
            <div
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
            ></div>
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default index;
