import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Foods from "../Components/Foods/Foods";
import Dashboard from "../Components/Dashboard/Dashboard";
import MainComponent from "../Components/MainComponent/MainComponent";
import About from "../Components/About/About";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import Contact from "../Components/Contact/Contact";
import FoodDetails from "../Components/FoodDetails/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent></MainComponent>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
      {
        path: "/foods",
        element: <Foods></Foods>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/food/:Id",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
