import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/header";
import AppRouter from "./router/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./layout/footer";

function App() {
  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam milidetik
      easing: "ease-in-out", // fungsi easing animasi
      once: true, // hanya menjalankan animasi sekali
    });
  }, []);

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header />
        <AppRouter />
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
