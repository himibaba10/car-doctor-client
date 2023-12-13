import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ServiceDetail from "../Pages/ServiceDetail";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import NotFound from "../Pages/NotFound";
import Checkout from "../Pages/Checkout";
import PrivateRoute from "./PrivateRoute";
import Bookings from "../Pages/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetail />,
      },
      {
        path: "/checkout",
        loader: ({ request }) => {
          const id = request.url.split("=")[1];
          return fetch(`http://localhost:5000/checkout?id=${id}`);
        },
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
