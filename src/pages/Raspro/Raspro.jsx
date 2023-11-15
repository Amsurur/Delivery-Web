import { Button } from "@mui/material";
import React from "react";
import "../Home/style.css";
import CardRaspro from "./components/CardRaspro";
import card1 from "../../assets/sales.svg";
import card2 from "../../assets/фон.svg";
import card3 from "../../assets/фон (1).svg";
import card4 from "../../assets/фон (2).svg";
import card5 from "../../assets/фон (3).svg";
import card6 from "../../assets/фон (4).svg";
import card7 from "../../assets/фон (5).svg";
import card8 from "../../assets/фон (6).svg";
import card9 from "../../assets/фон (7).svg";

const Raspro = () => {
  return (
    <div>
      <div className="sec1 mb-20 mt-10 w-[90%] mx-auto dark:text-black text-white md:px-32 sm:px-20 px-10 p-10">
        <p className="text-gray-400 text-xs">Главная / Распродажи</p>
        <p className="sm:text-3xl text-2xl font-bold mt-5">Введите ваш email</p>
        <p className="font-bold dark:text-white mt-3 mb-5">
          ранний доступ к распродажам в магазинах
        </p>
        <div className="pb-10 mt-10">
          {" "}
          <Button
            variant="contained"
            color="success"
            sx={{ paddingX: 5, borderRadius: 5, paddingY: 1 }}
          >
            Получить адрес в UK
          </Button>
        </div>
      </div>
      <div className="xl:w-[70%] lg:w-[80%] md:w-[85%] sm:w-[90%]  mx-auto pb-20">
        <p className="font-bold dark:text-white text-3xl lg:w-[50%] w-[90%] mx-auto lg:mx-0 mb-10">
          Black Friday Early Access ранний доступ к распродажам в магазинах
          Великобритании!
        </p>
        <div className="grid w-[90%] mx-auto md:grid-cols-2">
          <CardRaspro
            img={card1}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            p6="Только выкуп с оператором →"
            span1="£7.99 (3365₽) разделе:"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card2}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            p6="Только выкуп с оператором →"
            span1="£7.99 (3365₽) разделе:"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card3}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            span1="£7.99 (3365₽) разделе:"
            p6="Только выкуп с оператором →"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card4}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            span1="£7.99 (3365₽) разделе:"
            p6="Только выкуп с оператором →"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card4}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            span1="£7.99 (3365₽) разделе:"
            p6="Только выкуп с оператором →"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card5}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            span1="£7.99 (3365₽) разделе:"
            p6="Только выкуп с оператором →"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card6}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            span1="£7.99 (3365₽) разделе:"
            p6="Только выкуп с оператором →"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card7}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            span1="£7.99 (3365₽) разделе:"
            p6="Только выкуп с оператором →"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card8}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            span1="£7.99 (3365₽) разделе:"
            p6="Только выкуп с оператором →"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
          <CardRaspro
            img={card9}
            p="Abercrombie & Fitch"
            p1="цены от"
            p2="мужские вещи:"
            p3="женские вещи:"
            p4="качественные детские вещи "
            p5="на"
            span1="£7.99 (3365₽) разделе:"
            p6="Только выкуп с оператором →"
            span2="CLEARANCE"
            span3="CLEARANCE"
            span5="Abercrombie kids"
          />
        </div>
      </div>
    </div>
  );
};

export default Raspro;
