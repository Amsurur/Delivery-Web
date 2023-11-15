import React, { useEffect } from "react";

import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Buy from "./pages/HowToBuy/Buy";
import Raspro from "./pages/Raspro/Raspro";
import Price from "./pages/Price/Price";
import Help from "./pages/Help/Help";
import Partner from "./pages/Partner/Partner";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import NotFound from "./pages/NotFound/NotFound";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [age, setAge] = React.useState("");
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "buy",
          element: <Buy />,
        },
        {
          path: "rospro",
          element: <Raspro />,
        },
        {
          path: "price",
          element: <Price />,
        },
        {
          path: "help",
          element: <Help />,
        },
        {
          path: "partner",
          element: <Partner />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
