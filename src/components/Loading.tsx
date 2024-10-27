import React from "react";

const Loading = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="grid max-w-screen-xl px-4 pt-72 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-72">
        <div
          className="mr-auto place-self-center lg:col-span-7 animate-pulse"
          data-aos="fade-up"
        >
          <div className="max-w-2xl mb-4 h-12 bg-slate-700 rounded-lg dark:bg-gray-700"></div>
          <div className="max-w-2xl mb-6 h-6 bg-slate-700 rounded dark:bg-gray-700"></div>
          <div className="max-w-2xl mb-6 h-6 bg-slate-700 rounded dark:bg-gray-700"></div>
          <div className="max-w-2xl mb-6 h-6 bg-slate-700 rounded dark:bg-gray-700"></div>
          <div className="max-w-2xl mb-6 h-6 bg-slate-700 rounded dark:bg-gray-700"></div>
          <div className="max-w-2xl mb-6 h-6 bg-slate-700 rounded dark:bg-gray-700"></div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex animate-pulse">
          <div className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex bg-slate-700 h-64 dark:bg-gray-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
