import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import "./style.css";
import sec1 from "../../assets/Иллюстрация.svg";
import sec4 from "../../assets/sec4.svg";

import icon from "../../assets/Иконка.svg";
import icon1 from "../../assets/Иконка1.svg";
import icon2 from "../../assets/Иконка2.svg";
import icon3 from "../../assets/Иконка3.svg";
import icon4 from "../../assets/Иконка4.svg";
import icon5 from "../../assets/Иконка5.svg";
import coat from "../../assets/coat.svg";
import rus from "../../assets/rus.svg";
import eng from "../../assets/eng.svg";
import icon6 from "../../assets/partner5.svg";
import icon7 from "../../assets/partner4.svg";
import icon8 from "../../assets/partner3.svg";
import icon9 from "../../assets/partner2.svg";
import sec7_1 from "../../assets/sec7.1.svg";
import sec7_2 from "../../assets/sec7.2.svg";
import sec7_3 from "../../assets/sec7.3.svg";
import sec7_4 from "../../assets/ec7.4.svg";
import sec8 from "../../assets/Smart tv applications.svg";

import rating from "../../assets/рейтинг.svg";
import blogers1 from "../../assets/bloger1.svg";
import blogers2 from "../../assets/bloders2.png";
import blogers3 from "../../assets/blogers3.png";
import blogers4 from "../../assets/blogers4.png";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Section1 from "../../components/Section1/Section1";
import Inputs from "../../components/Inputs/Inputs";
import Types from "../../components/Types/Types";
import PriceTop from "../../components/PriceTop/PriceTop";
import Card from "../../components/Card/Card";
import Blogers from "./components/Blogers";
import { useTranslation } from "react-i18next";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="pb-40">
      {/* 1 */}
      <section className="w-[95%] mt-10 mx-auto rounded-3xl sec1 p-5">
        <div className="w-[92%] mx-auto grid md:grid-cols-[1.5fr,1fr] items-center">
          <div className="text-white dark:text-black md:pr-11 md:leading-0">
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="lg:text-5xl md:text-4xl sm:text-2xl mb-5 text-xl font-bold leading-loose lg:mb-5"
            >
              {t("home.sec1.p1")}
            </p>
            <p
              data-aos="zoom-out"
              data-aos-duration="3000"
              className="text-[#d4d4d4] dark:text-black lg:leading-8  md:leading-6 lsm:eading-5 text-xs md:font-normal mb-10 font-sans md:pr-24"
            >
              {t("home.sec1.p2")}
            </p>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2000"
              className="md:block hidden"
            >
              <Button
                variant="contained"
                sx={{ borderRadius: 10, paddingY: 2 }}
                color="success"
              >
                {t("home.sec1.p3")}
              </Button>
            </div>
          </div>
          <div className="" data-aos="fade-left" data-aos-duration="3000">
            <img src={sec1} alt="" />
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="mt-10 w-[85%] pb-10 mx-auto">
        <p className="dark:text-white mb-5 scale-up-bottom font-extrabold text-2xl ">
          Насколько выгодно <br /> покупать?
        </p>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="p-10 w-[100%] items-center dark:hover:text-black rounded-3xl dark:text-white hover:bg-[#F2F6FC] sm:flex">
                <img className=" rounded-3xl" src={icon} alt="" />
                <p className="font-bold">Одежда</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 w-[100%] items-center dark:hover:text-black rounded-3xl dark:text-white hover:bg-[#F2F6FC] sm:flex">
                <img className=" rounded-3xl" src={icon4} alt="" />
                <p className="font-bold">Для спорта</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 w-[100%] items-center dark:hover:text-black rounded-3xl dark:text-white hover:bg-[#F2F6FC] sm:flex">
                <img className="rounded-3xl" src={icon5} alt="" />
                <p className="font-bold">Одежда</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 w-[100%] items-center dark:hover:text-black rounded-3xl dark:text-white hover:bg-[#F2F6FC] sm:flex">
                <img className="rounded-3xl" src={icon3} alt="" />
                <p className="font-bold">Для детей</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 w-[100%] items-center dark:hover:text-black rounded-3xl dark:text-white hover:bg-[#F2F6FC] sm:flex">
                <img className="rounded-3xl" src={icon5} alt="" />
                <p className="font-bold">Одежда</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 w-[100%] items-center dark:hover:text-black rounded-3xl dark:text-white hover:bg-[#F2F6FC] sm:flex">
                <img className="rounded-3xl" src={icon1} alt="" />
                <p className="font-bold w-[40%]">Электроника</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 w-[100%] items-center dark:hover:text-black rounded-3xl dark:text-white hover:bg-[#F2F6FC] sm:flex">
                <img className="rounded-3xl" src={icon2} alt="" />
                <p className="font-bold w-[40%]">Аксессуары</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 w-[100%] items-center dark:hover:text-black dark:text-white hover:bg-[#F2F6FC] sm:flex">
                <img className="rounded-3xl" src={icon5} alt="" />
                <p className="font-bold">Косметика</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10  w-[100%] items-center hover:bg-[#F2F6FC] sm:flex">
                <img className="rounded-3xl" src={icon5} alt="" />
                <p className="font-bold">Одежда</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* 3 */}
      <section className="grid dark:text-white lg:grid-cols-[1.5fr,2fr,1.5fr] mb-10 md:grid-cols-3 md:gap-0 gap-5 sm:grid-cols-2 items-center w-[90%] mx-auto">
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000"
          className="justify-self-center"
        >
          <p className="font-bold text-xl w-[80%]  mb-10">
            Columbia Barlow Pass 550 Turbodown Jacket
          </p>
          <div className="flex  lg:w-[60%] gap-5 rounded-xl py-5 justify-center  items-center dark:bg-[#01CD7D] bg-[#F2F6FC]">
            <div className="inline">
              <img src={rus} alt="" />
            </div>
            <div className="inline">
              <p>Цена в России</p>
              <p className="font-bold">7891,46₽</p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
          className="justify-self-center  md:col-span-1  col-span-2"
        >
          <img src={coat} alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000"
          className="justify-self-end  "
        >
          <p className="font-bold text-xl w-[80%]  mb-10">
            Доставка одежды из Великобритании от{" "}
            <span className="text-[#01CD7D]">£7.79</span>
          </p>
          <div className="flex  lg:w-[60%] gap-5 rounded-xl py-5 justify-center  items-center dark:bg-[#01CD7D] bg-[#F2F6FC]">
            <div className="inline">
              <img src={eng} alt="" />
            </div>
            <div className="inline">
              <p>Цена в UK</p>
              <p className="font-bold dark:text-blue-600 text-[#01CD7D]">
                £80.62
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="3000"
        className="w-[90%] dark:text-white dark:bg-[#5b67d4] p-5 mx-auto sec3 grid lg:grid-cols-4 sm:grid-cols-2"
      >
        <div className="border-r-2 px-10 py-4 flex items-center gap-4 font-bold">
          <img className="" src={icon6} alt="" />
          <p>Экономия до 70%</p>
        </div>
        <div className="border-r-2 px-10 py-4 flex items-center gap-4 font-bold">
          <img src={icon7} alt="" />
          <p>Только подлинная продукция</p>
        </div>
        <div className="border-r-2 px-10 py-4 flex items-center gap-4 font-bold">
          <img src={icon8} alt="" />
          <p>Оперативная доставка</p>
        </div>
        <div className="px-10 py-4 lg:border-none border-r-2 flex items-center gap-4 font-bold">
          <img src={icon9} alt="" />
          <p>Огромный выбор товаров</p>
        </div>
      </div>
      {/* 4 */}
      <div data-aos="zoom-out-up" data-aos-duration="3000">
        <Section1
          img={sec4}
          p1="Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел."
          p2="Такой способ покупки также подойдёт, если магазин принимает только английские карты."
          p3="Попробовать"
        />
      </div>
      {/* 5 */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        className="mt-20 md:w-[80%] dark:text-white w-[90%] md:text-start text-center   mx-auto"
      >
        <div className="md:w-[60%] sm:w-[75%] w-[90%] md:mx-0 mx-auto leading-6">
          <p className="font-bold ms:text-3xl text-2xl mb-5 ">
            OkeyPost удобная и быстрая доставка посылок из Великобритании{" "}
          </p>
          <p className="text-[#838d95] md:leading-7 md:pr-10">
            Рассчитайте стоимость доставки из Англии к вам домой. Мы получим
            ваши посылки на складе, при необходимости объединим несколько
            доставок в одну и отправим их к вам надежно упакованными.
          </p>
        </div>
        <div>
          <Inputs />
        </div>
      </div>
      {/* 6 */}
      <Types />
      {/* 7  */}
      <div>
        <div className="w-[80%] mx-auto mt-20 dark:text-white">
          <p className="font-bold md:text-3xl md:w-[50%] sm:text-2xl text-xl w-[80%] md:mx-0 mx-auto md:text-start text-center">
            4 простых шага для ваших покупок в Великобритании{" "}
          </p>
        </div>
        <PriceTop
          img={sec7_1}
          img2={sec7_2}
          img3={sec7_3}
          img4={sec7_4}
          p1="Ваш личный адрес для покупок "
          p2="Объединение нескольких посылок в одну"
        />
      </div>
      {/* 8 */}
      <div>
        <Section1
          img={sec8}
          p1="Виртуальный тур по нашему складу в реальном времени"
          p2="Вы можете всегда посмотреть на нашу слаженую работу на складе"
          p3="Попробовать"
        />
      </div>
      {/* 9 */}
      <div className="w-[80%] mx-auto grid sm:grid-cols-3 gap-4 pt-20">
        <Card
          img={icon6}
          p1="Больше не значит дороже"
          p2="С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии."
        />
        <Card
          img={icon8}
          p1="Быстрая обработка посылок"
          p2="Посылка обрабатывается не дольше 48 часов после поступления на склад."
        />
        <Card
          img={icon7}
          p1="SMS-уведомления"
          p2="Отслеживайте весь процесс с помощью sms-уведомлений."
        />
      </div>
      {/* 10 */}
      <div className="md:w-[80%] w-[90%] mx-auto">
        <p className="my-14 font-bold md:text-3xl text-2xl">
          Отзывы и цитаты блогеров:
        </p>
        <div className="grid lg:grid-cols-2 gap-5 ">
          <Blogers
            img={blogers1}
            img2={rating}
            p1="NIKOLAY S"
            p2="Ваша доставка самая быстрая и дешёвая!!!"
            span1="Дата:"
            span2="Город:"
            p3="16 Ноября 2021"
            p4="Санкт-Петербург"
          />
          <Blogers
            img={blogers2}
            img2={rating}
            p1="NIKOLAY S"
            p2="Ваша доставка самая быстрая и дешёвая!!!"
            span1="Дата:"
            span2="Город:"
            p3="16 Ноября 2021"
            p4="Санкт-Петербург"
          />
          <Blogers
            img={blogers3}
            img2={rating}
            p1="NIKOLAY S"
            p2="Ваша доставка самая быстрая и дешёвая!!!"
            span1="Дата:"
            span2="Город:"
            p3="16 Ноября 2021"
            p4="Санкт-Петербург"
          />
          <Blogers
            img={blogers4}
            img2={rating}
            p1="NIKOLAY S"
            p2="Ваша доставка самая быстрая и дешёвая!!!"
            span1="Дата:"
            span2="Город:"
            p3="16 Ноября 2021"
            p4="Санкт-Петербург"
          />
        </div>
        <div className="mt-8 mb-20">
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 5, paddingX: 5 }}
          >
            Все отзывы
          </Button>
        </div>
      </div>
      {/* 11 */}
      <div className="w-[80%] mx-auto dark:text-white">
        <p className="font-bold text-3xl mb-5">
          Ваш личный адрес в Великобритании для покупок
        </p>
        <p className="text-xs leading-7">
          С нами вы получаете целых два адреса в UK! У нас есть два склада для
          приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из
          них, отправка на который обойдется дешевле (или покупка будет без
          налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь,
          а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда
          получаете максимальную выгоду! <br /> <br /> При доставке из UK в
          Россию все ваши товары обязательно страхуются. Прием посылок на наш
          склад, их обработка, удаление лишних коробок, хранение сроком до 70
          дней – у нас полностью бесплатно. Мы также бесплатно проводим
          объединение посылок из разных магазинов в одну. Это необходимо для
          снижения стоимости доставки посылок из UK в Россию. <br /> <br /> У
          нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть
          какие-то особенные требования, вроде проверки техники или
          дополнительной пленки для самых хрупких товаров, – операторы нашего
          склада с радостью выполнят их по спецзапросу. <br /> <br />{" "}
          Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы
          всегда найдете информацию о лучших скидках fyukbqcrb магазинов. Не
          обязательно заходить в Черную пятницу или Prime Day, крутые акции
          проходят каждый день!
        </p>
      </div>
      {/* 12 */}
      <div className="sec1 w-[80%] mx-auto grid mt-20 lg:grid-cols-[2fr,1fr,1fr] gap-10 items-center p-8 md:px-20 px-10 text-white">
        <p className="text-2xl dark:text-black text-white">
          Подпишитеть и будьте в курсе всех скидок и акций магазинов
          Великобритании!
        </p>
        <TextField
          variant="standard"
          label="Введите ваш email"
          sx={{ color: "white" }}
        />
        <div className="">
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 5, paddingX: 5 }}
          >
            Все отзывы
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
