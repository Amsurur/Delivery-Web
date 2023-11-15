import React from "react";
import types1 from "../../assets/partner2.svg";
import types2 from "../../assets/partner5.svg";
import types3 from "../../assets/partner4.svg";

import info from "../../assets/Подробнее.svg";
import "./style.css";
const Types = () => {
  return (
    <div>
      <div className="mt-20 w-[80%] mx-auto ">
        <p className="font-bold dark:text-white text-2xl">Варианты доставки:</p>
        <div className="lg:block grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="lg:flex  dark:bg-gray-600 type justify-between items-center p-3 lg:mt-10">
            <div className="flex items-center gap-4 p-3">
              <img src={types1} alt="" />
              <p className="font-bold">Почта России</p>
            </div>
            <div className="lg:grid lg:grid-cols-[1fr,1fr,1fr,0.5fr] items-center">
              <div className="border-l-2 p-3 leading-9 justify-self-center">
                <p className="text-xs">Сроки:</p>
                <p className="font-bold">10-14 дней</p>
              </div>
              <div className="border-l-2 p-3  leading-9 justify-self-center">
                <p className="text-xs">Стоимость доставки:</p>
                <p className="font-bold">от £27.00</p>
              </div>
              <div className="border-l-2 p-3  leading-9 justify-self-center">
                <p className="text-xs">Итого:</p>
                <p className="font-bold">£41.99</p>
              </div>
              <div className="justify-self-center">
                <img src={info} alt="" />
              </div>
            </div>
          </div>{" "}
          <div className="lg:flex type dark:bg-gray-600 type justify-between items-center p-3 lg:my-5">
            <div className="flex items-center gap-4 p-3">
              <img src={types2} alt="" />
              <p className="font-bold">EMS ПОЧТА РОССИЯ</p>
            </div>
            <div className="lg:grid lg:grid-cols-[1fr,1fr,1fr,0.5fr] items-center">
              <div className="border-l-2 p-3 leading-9 justify-self-center">
                <p className="text-xs">Сроки:</p>
                <p className="font-bold">9-12 дней</p>
              </div>
              <div className="border-l-2 p-3  leading-9 justify-self-center">
                <p className="text-xs">Стоимость доставки:</p>
                <p className="font-bold">от £40.00</p>
              </div>
              <div className="border-l-2 p-3  leading-9 justify-self-center">
                <p className="text-xs">Итого:</p>
                <p className="font-bold">£54.55</p>
              </div>
              <div className="justify-self-center">
                <img src={info} alt="" />
              </div>
            </div>
          </div>
          <div className="lg:flex type dark:bg-gray-600 type justify-between items-center p-3">
            <div className="flex items-center gap-4 p-3">
              <img src={types3} alt="" />
              <p className="font-bold">ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</p>
            </div>
            <div className="lg:grid lg:grid-cols-[1fr,1fr,1fr,0.5fr] items-center">
              <div className="border-l-2 p-3 leading-9 justify-self-center">
                <p className="text-xs">Сроки:</p>
                <p className="font-bold">10-14 дней</p>
              </div>
              <div className="border-l-2 p-3  leading-9 justify-self-center">
                <p className="text-xs">Стоимость доставки:</p>
                <p className="font-bold">от £27.00</p>
              </div>
              <div className="border-l-2 p-3  leading-9 justify-self-center">
                <p className="text-xs">Итого:</p>
                <p className="font-bold">£41.99</p>
              </div>
              <div className="justify-self-center">
                <img src={info} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
