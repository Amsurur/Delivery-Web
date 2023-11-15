import React from "react";
import PriceTop from "../../components/PriceTop/PriceTop";
import priceTop from "../../assets/priceTop1.svg";
import priceTop4 from "../../assets/Ресурс 1 5.svg";
import priceTop2 from "../../assets/Ресурс 1 4.svg";
import priceTop3 from "../../assets/Ресурс 1 2.svg";
import Inputs from "../../components/Inputs/Inputs";
import Types from "../../components/Types/Types";

const Price = () => {
  return (
    <div>
      <div>
        <div className="sec1 mb-10 mt-10 w-[90%] mx-auto text-white md:px-32 sm:px-20 px-10 p-10">
          <p className="text-gray-400 text-xs">Главная / Цены</p>
          <p className="sm:text-3xl text-2xl font-bold mt-5">
            Услуги доставки из Великобритании
          </p>
        </div>
      </div>
      <div className="">
        <PriceTop
          img={priceTop}
          img2={priceTop2}
          img3={priceTop3}
          img4={priceTop4}
          p1="Ваш личный адрес для покупок "
          p2="Объединение нескольких посылок в одну"
        />
      </div>
      <div className="w-[80%] mx-auto pb-10">
        <div>
          <p className="dark:text-white text-3xl font-bold">
            Онлайн-калькулятор стоимости доставки товара
          </p>
          <p className="text-gray-400 mt-5">
            Задайте необходимые параметры посылки, и калькулятор рассчитает
            приблизительную стоимость доставки вашей посылки из Англии.
          </p>
        </div>
        <Inputs />
      </div>
      <div className="pb-10">
        <Types />
      </div>
    </div>
  );
};

export default Price;
