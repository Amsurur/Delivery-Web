import React from "react";
import "../../pages/Home/style.css";
import whatsapp from "../../assets/Ватсап.svg";
import viber from "../../assets/Вайбер.svg";
import chat from "../../assets/Чат.svg";
const PreFooter = () => {
  return (
    <div
      className="pb-10 "
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="sec1 w-[90%] mx-auto md:p-10 py-10 px-5 lg:px-40 md:px-20 md:flex  items-center justify-between">
        <p className="text-3xl dark:text-black  text-white justify-self-center">
          Остались вопросы? Спросите нас в соцсетях!
        </p>
        <div className="flex items-center justify-center gap-10 md:gap-0 p-5">
          <img className="" src={whatsapp} alt="" />
          <img src={viber} alt="" />
          <img src={chat} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
