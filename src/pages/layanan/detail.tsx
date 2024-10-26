import Lottie from "lottie-react";

import { fetchPelayanan, PelayananData } from "../../service/apiServices";
import { useQuery } from "@tanstack/react-query";
const Detail = () => {
  const { data: dataPelayanan } = useQuery<PelayananData[]>({
    queryKey: ["dataPelayanan"],
    queryFn: fetchPelayanan,
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Row --> */}
        {dataPelayanan?.map((item, index) => (
          <div
            key={index}
            className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16"
          >
            {/* Teks dan deskripsi */}
            <div
              className={`text-gray-500 sm:text-lg dark:text-gray-400 ${
                index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              }`}
              data-aos="fade-right"
            >
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {item?.namaPelayanan}
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                {item?.deskripsiPelayanan}
              </p>
              {/* <!-- List --> */}
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                {item?.featurPelayanan
                  .split("-") // Memisahkan string berdasarkan tanda '-'
                  .filter((feature) => feature.trim() !== "") // Menghilangkan elemen kosong akibat pemisahan
                  .map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-500 dark:text-gray-400">
                        {feature.trim()}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
            {/* Gambar atau animasi */}
            <div
              className={`hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Lottie
                animationData={item?.animation}
                loop={true}
                className="w-full h-auto"
                alt="feature animation"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Detail;
