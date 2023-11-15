import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../components/Card/style.css";

const MyNabar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <ul className=" w-[80%] shadow-2xl p-5 text-lg mx-auto dark:text-white card  items-center gap-7">
        <Link to="/buy">
          <li className="hover:text-blue-400">{t("nav.p1")}</li>
        </Link>
        <Link to="/rospro">
          <li className="hover:text-blue-400">{t("nav.p2")}</li>
        </Link>
        <Link to="/price">
          <li className="hover:text-blue-400">{t("nav.p3")}</li>
        </Link>
        <Link to="/help">
          <li className="hover:text-blue-400">{t("nav.p4")}</li>
        </Link>
        <Link to="/partner">
          <li className="hover:text-blue-400">{t("nav.p5")}</li>
        </Link>
        <Link to="/blog">
          <li className="hover:text-blue-400">{t("nav.p6")}</li>
        </Link>
        <Link to="/shop">
          <li className="hover:text-blue-400">{t("nav.p7")}</li>
        </Link>
      </ul>
    </div>
  );
};

export default MyNabar;
