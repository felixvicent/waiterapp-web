import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Menu } from "../pages/Menu";
import { Users } from "../pages/Users";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}
