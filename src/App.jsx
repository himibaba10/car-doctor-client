import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <div className="section">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
