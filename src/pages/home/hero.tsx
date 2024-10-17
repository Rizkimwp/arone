const Hero = () => {
  return (
    <section className="relative bg-dark-900 overflow-hidden h-screen ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/asset/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 grid max-w-screen-xl  px-4 pt-40 pb-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-72">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            data-aos="fade-up"
            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white"
          >
            Biro jasa kependudukan sipil Pasang reklame dan perpanjangan pajak
            kendaraan
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
            Kami adalah solusi terpercaya untuk semua kebutuhan administrasi
            Anda. Dengan layanan profesional di bidang kependudukan sipil,
            pemasangan reklame, dan perpanjangan pajak kendaraan, kami
            berkomitmen untuk mempermudah urusan Anda.
          </p>
          {/* <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/themesberg/landwind"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <img src="/asset/icon.svg" alt="Icon" className="w-5 h-5 mr-2" />
            </a>
            <a
              href="https://www.figma.com/community/file/1125744163617429490"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <img src="/asset/hero.svg" alt="Icon" className="w-5 h-5 mr-2" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
