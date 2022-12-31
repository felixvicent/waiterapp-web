import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";

export function SignRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
