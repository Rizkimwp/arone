import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Layanan from "../pages/layanan";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/layanan" element={<Layanan />}></Route>
    </Routes>
  );
};

export default AppRoute;
