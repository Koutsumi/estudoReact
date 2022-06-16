import React, { useState } from "react";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";

import "dotenv";

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { config } from './database/index';

const app = initializeApp(config.firebaseConfig);
export const db = getFirestore(app);
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { PublicHome } from "./views/public/home";
import { Login } from "./views/public/login";
import { Register } from "./views/public/register";
import { DashboardHome } from "./views/admin/home";

import AuthRoute, { VerifyLogin } from "./context/auth";

export function App() {

  const auth = getAuth();

  const [verifyUser, setVerifyUser] = useState<boolean>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setVerifyUser(true);
    } else {
      setVerifyUser(false);
    }
  });

  return (
    <BrowserRouter>
      <Routes>

        {verifyUser ?
        
          <Route path={import.meta.env.VITE_DASHBOARD} element={
            <AuthRoute>
              <DashboardHome />
            </AuthRoute>

          } />

          :
          <>
            <Route path={import.meta.env.VITE_HOME} element={<PublicHome />} />

            <Route path={import.meta.env.VITE_LOGIN} element={<Login />} />

            <Route path={import.meta.env.VITE_REGISTER} element={<Register />} />
          </>
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
