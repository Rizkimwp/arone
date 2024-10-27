import React from "react";

const LoadingPelayanan = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* Skeleton Row */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 animate-pulse"
          >
            {/* Teks dan deskripsi */}
            <div
              className={`text-gray-500 sm:text-lg dark:text-gray-400 ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="mb-4 h-8 bg-slate-700 rounded-lg dark:bg-gray-700 w-1/2"></div>
              <div className="mb-8 h-6 bg-slate-700 rounded dark:bg-gray-700 w-full"></div>

              {/* List */}
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                {[1, 2, 3].map((_, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-green-500"></div>
                    <div className="h-4 bg-slate-700 rounded w-3/4 dark:bg-gray-700"></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gambar atau animasi */}
            <div
              className={`hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex bg-slate-700 h-64 dark:bg-gray-700 ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoadingPelayanan;
