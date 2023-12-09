import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ServiceDetail from "../Pages/ServiceDetail";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail />,
      },
    ],
  },
]);

export default router;
