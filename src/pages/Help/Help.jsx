import React from "react";
import "../Home/style.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
import PreFooter from "../../components/PreFooter/PreFooter";
const Help = () => {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  return (
    <div className="dark:text-white">
      <div className="sec1 mb-10 mt-10 w-[90%] mx-auto dark:text-white text-white md:px-32 sm:px-20 px-10 p-10">
        <p className="text-gray-400 text-xs">
          Главная / Часто задаваемые вопросы
        </p>
        <p className="sm:text-3xl text-2xl font-bold mt-5">
          Отвечаем на вопросы доставки
        </p>
      </div>
      <div className="w-[82%] mx-auto mb-10">
        <p className="font-bold dark:text-white text-3xl ">
          Виртуальный адрес в Великобритании
        </p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="w-[80%] mx-auto "
      >
        <div>
          <Accordion sx={{ borderRadius: 5, margin: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Что делать, если Вы забыли внести трек номер на сайт, а заказ
                уже пришел?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: 5, margin: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Как я узнаю что заказ пришел на склад?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: 5, margin: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Покупки на Eбeй / Ebay</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion sx={{ borderRadius: 5, margin: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Что делать после того, как я выкупил заказ самостоятельно на ваш
                адресс?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: 5, margin: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Как купить на виртуальный адрес?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ borderRadius: 5, margin: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Сколько стоит виртуальный адрес?</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion sx={{ borderRadius: 5, margin: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Как купить на виртуальный адрес?</Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <p className="font-bold text-3xl my-10 mt-20 w-[90%] ml-auto">
          Покупки в магазинаx Англии, скидки и промкода
        </p>
        <div className="w-[80%] mx-auto ">
          <div>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Что делать, если Вы забыли внести трек номер на сайт, а заказ
                  уже пришел?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Как я узнаю что заказ пришел на склад?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Покупки на Eбeй / Ebay</Typography>
              </AccordionSummary>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Что делать после того, как я выкупил заказ самостоятельно на
                  ваш адресс?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Как купить на виртуальный адрес?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Сколько стоит виртуальный адрес?</Typography>
              </AccordionSummary>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Как купить на виртуальный адрес?</Typography>
              </AccordionSummary>
            </Accordion>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <p className="font-bold text-3xl my-10 mt-20 w-[90%] ml-auto">
          Доставка из Англии
        </p>
        <div className="w-[80%] mx-auto ">
          <div>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Как часто вы отправляете посылки в россию?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Возможно ли доставка в страны, не указанные на сайте?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>
                  Сколько стоит доставка в Казаxстан и другие страны Азии, какие
                  сроки?
                </Typography>
              </AccordionSummary>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Что делать после того, как я выкупил заказ самостоятельно на
                  ваш адресс?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Как купить на виртуальный адрес?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Сколько стоит виртуальный адрес?</Typography>
              </AccordionSummary>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Как купить на виртуальный адрес?</Typography>
              </AccordionSummary>
            </Accordion>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <p className="font-bold text-3xl my-10 mt-20 w-[90%] ml-auto">Оплата</p>
        <div className="w-[80%] mx-auto ">
          <div>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Где найти реквизиты для оплаты? и как оплатить?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Как оплатить через пайпал?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>
                  Какие способы оплаты вы принимаете из России?
                </Typography>
              </AccordionSummary>
            </Accordion>

            <Accordion sx={{ borderRadius: 5, margin: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#01CD7D" }} />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Как купить на виртуальный адрес?</Typography>
              </AccordionSummary>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="my-20">
        <PreFooter />
      </div>
    </div>
  );
};

export default Help;
