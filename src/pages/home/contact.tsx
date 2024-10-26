const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Hubungi Kami Sekarang
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Jika Anda memiliki pertanyaan, membutuhkan informasi lebih lanjut,
            atau ingin berkonsultasi tentang layanan kami, jangan ragu untuk
            menghubungi kami.
          </p>
          <a
            href="https://wa.me/6285934330755" // Replace with your WhatsApp number
            target="_blank"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Hubungi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
