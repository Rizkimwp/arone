import Lottie from "lottie-react";
import { useQuery } from "@tanstack/react-query";
import { fetchKontak, KontakData } from "../../service/apiServices";

const Contact = () => {
  const { data: dataKontak } = useQuery<KontakData>({
    queryKey: ["dataKontak"],
    queryFn: fetchKontak,
  });

  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="grid max-w-screen-xl px-4 pt-72 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-72">
        <div
          className="mr-auto place-self-center lg:col-span-7"
          data-aos="fade-up"
        >
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            {dataKontak?.title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {dataKontak?.deskripsi}
          </p>

          <a
            href={`https://wa.me/${dataKontak?.nomor_telepon}`} // Replace with your WhatsApp number
            target="_blank"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Hubungi Sekarang
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex">
            <Lottie
              animationData={dataKontak?.animation}
              loop={true}
              className="w-full h-auto"
              alt="feature animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
