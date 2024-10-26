import { Route, Routes } from "react-router-dom";
import Profile from "../pages/profile";
import Layanan from "../pages/layanan";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/home";
import Artikel from "../pages/artikel";
import Contact from "../pages/contact";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="layanan" element={<Layanan />} />
        <Route path="artikel" element={<Artikel />} />
        <Route path="kontak" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
