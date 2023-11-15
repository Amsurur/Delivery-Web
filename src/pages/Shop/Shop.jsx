import React from "react";
import Mycard from "./components/card";
import card1 from "../../assets/shopImg/image 4.svg";
import card2 from "../../assets/shopImg/image 5.svg";
import card3 from "../../assets/shopImg/image 6.svg";
import card4 from "../../assets/shopImg/image 7.svg";
import card5 from "../../assets/shopImg/image 8.svg";
import PreFooter from "../../components/PreFooter/PreFooter";
const Shop = () => {
  return (
    <div>
      <div className="sec1 mb-10 mt-10 w-[90%] mx-auto dark:text-[#01CD7D] text-white md:px-32 sm:px-20 px-10 p-10">
        <p className="text-gray-400 text-xs">Главная / Популярные магазины</p>
        <p className="sm:text-3xl text-2xl font-bold mt-5">
          Популярные магазины
        </p>
      </div>
      <div className="md:grid md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-5 w-[80%] mt-20 mb-32 mx-auto">
        <Mycard img={card2} p="Primark" />
        <Mycard img={card2} p="H&M" />
        <Mycard img={card5} p="Mangooutlet" />
        <Mycard img={card2} p="Next" />
        <Mycard img={card5} p="Sportdirect" />
        <Mycard img={card2} p="Primark " />
        <Mycard img={card2} p="H&M" />
        <Mycard img={card5} p="Mangooutlet" />
        <Mycard img={card2} p="Next" />
        <Mycard img={card5} p="Sportdirect" />
        <Mycard img={card2} p="Primark " />
        <Mycard img={card2} p="H&M" />
        <Mycard img={card5} p="Mangooutlet" />
        <Mycard img={card2} p="Next" />
        <Mycard img={card5} p="Sportdirect" />
        <Mycard img={card2} p="Primark " />
        <Mycard img={card2} p="H&M" />
        <Mycard img={card5} p="Mangooutlet" />
        <Mycard img={card2} p="Next" />
        <Mycard img={card5} p="Sportdirect" />
        <Mycard img={card2} p="Primark " />
        <Mycard img={card2} p="H&M" />
        <Mycard img={card5} p="Mangooutlet" />
        <Mycard img={card2} p="Next" />
        <Mycard img={card5} p="Sportdirect" />
        <Mycard img={card2} p="Primark " />
        <Mycard img={card2} p="H&M" />
        <Mycard img={card5} p="Mangooutlet" />
        <Mycard img={card2} p="Next" />
        <Mycard img={card5} p="Sportdirect" />
        <Mycard img={card2} p="Primark " />
        <Mycard img={card2} p="H&M" />
        <Mycard img={card5} p="Mangooutlet" />
        <Mycard img={card2} p="Next" />
        <Mycard img={card5} p="Sportdirect" />
        <Mycard img={card2} p="Primark " />
        <Mycard img={card2} p="H&M" />
        <Mycard img={card5} p="Mangooutlet" />
        <Mycard img={card2} p="Next" />
        <Mycard img={card5} p="Sportdirect" />
      </div>
      <div>
        <PreFooter />
      </div>
    </div>
  );
};

export default Shop;
