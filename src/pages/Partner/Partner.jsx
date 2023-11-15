import { Button } from "@mui/material";
import React from "react";
import Card from "../../components/Card/Card";
import card1 from "../../assets/partner1.svg";
import card2 from "../../assets/partner2.svg";
import card3 from "../../assets/partner3.svg";
import card4 from "../../assets/partner4.svg";
import card5 from "../../assets/partner5.svg";
import Section1 from "../../components/Section1/Section1";
import partner from "../../assets/Partner.svg";
const Partner = () => {
  return (
    <div>
      <div className="sec1 mt-10 w-[90%] mx-auto mb-20 text-white md:px-32 sm:px-20 px-10 p-10">
        <p className="text-gray-400 text-xs">
          Главная / Бонусы и партнёрская программа
        </p>
        <p className="sm:text-3xl text-2xl font-bold mt-5">
          Бонусы и партнёрская программа
        </p>
        <p className="font-bold mt-3 mb-5">
          Платим $3 с каждой отправленной посылки
        </p>
        <div className="pb-10 mt-10">
          {" "}
          <Button
            variant="contained"
            color="success"
            sx={{ paddingX: 5, borderRadius: 5, paddingY: 1 }}
          >
            Начать зарабатывать
          </Button>
        </div>
      </div>
      <div className="md:w-[80%] w-[90%] mx-auto">
        <p className="font-bold dark:text-white md:text-3xl text-2xl">
          Зарабатывать с нами — проще простого:
        </p>
        <div className="grid md:grid-cols-2  gap-4 mt-20">
          <Card
            img={card1}
            p1="Дарим скидку 10% вашим друзьям и подписчикам"
            p2="На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке."
          />
          <Card
            img={card2}
            p1="Платим по £3 за отправленную посылку "
            p2="Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет."
          />
          <Card
            img={card3}
            p1="Промо на любой вкус"
            p2="Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов."
          />
          <Card
            img={card4}
            p1="Выплаты по запросу"
            p2="Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет."
          />
          <Card
            img={card5}
            p1="Начисляем кэшбэк £1 на 1 посылку"
            p2="За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов "
          />
        </div>
      </div>
      <div className="mb-32">
        <Section1
          img={partner}
          p1="Готовы начать зарабатывать вместе с нами?"
          p2="Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!"
          p3="Присоедениться"
        />
      </div>
    </div>
  );
};

export default Partner;
