import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Shared/Header";
import Footer from "./Components/Shared/Footer";

function App() {
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
