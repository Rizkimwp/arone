import Lottie from "lottie-react";
import { useQuery } from "@tanstack/react-query";
import { fetchLayanan, LayananData } from "../../service/apiServices";
import Loading from "../../components/Loading";
const Layanan = () => {
  const { data: dataLayanan, isLoading: isLoadingLayanan } =
    useQuery<LayananData>({
      queryKey: ["dataLayanan"],
      queryFn: fetchLayanan,
    });

  if (isLoadingLayanan) {
    return <Loading />;
  }

  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="grid max-w-screen-xl px-4 pt-72 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-72">
        <div
          className="mr-auto place-self-center lg:col-span-7"
          data-aos="fade-up"
        >
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            {dataLayanan?.title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {dataLayanan?.deskripsi}
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex">
            <Lottie
              animationData={dataLayanan?.animation}
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

export default Layanan;
