import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { SplashScreen } from "./components/Splash";
import { AuthProvider } from "./context/auth";

import Router from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        {splashVisible ? <SplashScreen /> : <Router />}
      </AuthProvider>
      <ToastContainer position="bottom-center" />
    </BrowserRouter>
  );
}
