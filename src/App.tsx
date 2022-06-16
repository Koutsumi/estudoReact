import React from "react";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";

import "dotenv";

import { PublicHome } from "./views/public/home";
import { Login } from "./views/public/login";
import { Register } from "./views/public/register";
import { DashboardHome } from "./views/admin/home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={import.meta.env.VITE_HOME} element={<PublicHome />} />
        <Route path={import.meta.env.VITE_LOGIN} element={<Login />} />
        <Route path={import.meta.env.VITE_REGISTER} element={<Register />} />
        <Route path={import.meta.env.VITE_DASHBOARD} element={<DashboardHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
