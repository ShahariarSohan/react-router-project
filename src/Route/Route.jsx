import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Foods from "../Components/Foods/Foods";
import Dashboard from "../Components/Dashboard/Dashboard";
import MainComponent from "../Components/MainComponent/MainComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent></MainComponent>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/foods",
        element: <Foods></Foods>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
