import { Route, Routes } from "react-router-dom";
import Profile from "../pages/profile";
import Layanan from "../pages/layanan";
import DashboardLayout from "../layout/DashboardLayout";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Pengguna from "../pages/users";
import Artikel from "../pages/artikel";
import Komentar from "../pages/komentar";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="pengguna" element={<Pengguna />} />
        <Route path="artikel" element={<Artikel />} />
        <Route path="komentar" element={<Komentar />} />
      </Route>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="layanan" element={<Layanan />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
