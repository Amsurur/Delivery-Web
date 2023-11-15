import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/Лого.svg";
import icons from "../assets/Соцсети.svg";
import { Button } from "@mui/material";
import Burger from "../components/Burger/Burger";
import Switcher from "../components/Switcher/Switcher";
import { useTranslation } from "react-i18next";
import MyNabar from "../components/MyNabar";

const Layout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { pathname } = useLocation();

  const active = localStorage.getItem("i18nextLng");
  const [actv, setActv] = useState(localStorage.getItem("true"));
  return (
    <div className=" dark:bg-black ">
      <nav className="flex  items-center justify-evenly py-5">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          className=""
        >
          <Link to="/">
            <img
              style={{ color: pathname == "/" ? "#01CD7D" : "" }}
              className="w-[80%]"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <ul
          data-aos="fade-down-right"
          data-aos-duration="2000"
          className="lg:flex dark:text-white hidden text-xs items-center gap-7"
        >
          <Link to="/buy">
            <li
              style={{ color: pathname == "/buy" ? "#01CD7D" : "" }}
              className="hover:text-blue-400"
            >
              {t("nav.p1")}
            </li>
          </Link>
          <Link to="/rospro">
            <li
              style={{ color: pathname == "/rospro" ? "#01CD7D" : "" }}
              className="hover:text-blue-400"
            >
              {t("nav.p2")}
            </li>
          </Link>
          <Link to="/price">
            <li
              style={{ color: pathname == "/price" ? "#01CD7D" : "" }}
              className="hover:text-blue-400"
            >
              {t("nav.p3")}
            </li>
          </Link>
          <Link to="/help">
            <li
              style={{ color: pathname == "/help" ? "#01CD7D" : "" }}
              className="hover:text-blue-400"
            >
              {t("nav.p4")}
            </li>
          </Link>
          <Link to="/partner">
            <li
              style={{ color: pathname == "/partner" ? "#01CD7D" : "" }}
              className="hover:text-blue-400"
            >
              {t("nav.p5")}
            </li>
          </Link>
          <Link to="/blog">
            <li
              style={{ color: pathname == "/blog" ? "#01CD7D" : "" }}
              className="hover:text-blue-400"
            >
              {t("nav.p6")}
            </li>
          </Link>
          <Link to="/shop">
            <li
              style={{ color: pathname == "/shop" ? "#01CD7D" : "" }}
              className="hover:text-blue-400"
            >
              {t("nav.p7")}
            </li>
          </Link>
        </ul>

        <div className="lg:flex hidden items-center gap-5">
          <div className="flex gap-5 dark:text-white">
            <p
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              style={{ color: active == "en" ? "#01CD7D" : "gray" }}
              onClick={() => changeLanguage("en")}
              value="ru"
            >
              EN
            </p>
            <p
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              style={{ color: active == "ru" ? "#01CD7D" : "gray" }}
              onClick={() => changeLanguage("ru")}
              value="en"
            >
              RU
            </p>
          </div>
          <Button
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            variant="contained"
            data-aos-duration="2000"
            sx={{ borderRadius: 10 }}
            color="success"
          >
            {t("nav.btn")}
          </Button>
          <div data-aos="zoom-out-down" data-aos-duration="3000">
            <Switcher />
          </div>
        </div>
        <div className="flex lg:hidden gap-10 items-center">
          <div className="flex gap-10 items-center">
            <p
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              style={{ color: active == "en" ? "#01CD7D" : "gray" }}
              onClick={() => changeLanguage("en")}
              value="ru"
            >
              EN
            </p>
            <p
              data-aos="zoom-in-down"
              data-aos-duration="2000"
              style={{ color: active == "ru" ? "#01CD7D" : "gray" }}
              onClick={() => changeLanguage("ru")}
              value="en"
            >
              RU
            </p>
          </div>
          <Burger />
        </div>
      </nav>
      <Outlet />
      <footer className="lg:w-[75%] md:w-[85%] w-[90%] mx-auto flex items-start flex-wrap justify-evenly lg:justify-between">
        <div className="">
          <img className="mb-10" src={logo} alt="" />
          <img src={icons} alt="" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
          className="text-xs"
        >
          <ul className="text-[#868e95] dark:text-[white] leading-6">
            <td className="text-black dark:text-white font-bold">О компании</td>
            <li>Услуги</li>
            <li>Цены</li>
            <li>Отзывы</li>
            <li>Контакты</li>
            <li>Вакансии</li>
            <li> Соглашение о персональных данных</li>
            <li>Условия использования</li>
          </ul>
        </div>
        <div className="text-xs md:mt-0 mt-5 ">
          <ul className="text-[#868e95] dark:text-white leading-6">
            <td className="text-black dark:text-white font-bold">Полезное</td>
            <li>Как работает наш сервис</li>

            <li>Как покупать с оператором</li>
            <li>Ответы на частые вопросы</li>
            <li>Популярные магазины</li>
            <li>Черный список магазинов</li>
            <li>Актуальные распродажи</li>
          </ul>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000"
          className="text-xs md:mt-0 mt-5 leading-6"
        >
          <ul className="text-[#868e95] dark:text-white">
            <td className="text-black dark:text-white font-bold">
              Спецпроекты
            </td>
            <li>50% на первую доставку</li>
            <li>Скидки для постоянных клиентов</li>

            <li>Реферальная программа</li>
            <li>Кэшбек Mr. Rebates и Rakuten</li>
            <li>Stop Fraud</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
