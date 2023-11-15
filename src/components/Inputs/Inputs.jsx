import { Button, TextField } from "@mui/material";
import React from "react";
import "./style.css";

const Inputs = () => {
  return (
    <div>
      <div className="box mt-10 dark:bg-gray-500  ">
        <div className="flex justify-between lg:flex-nowrap flex-wrap items-center p-8">
          <div className="mt-2 lg:mt-0">
            <p className="text-xs font-bold ">Страна:</p>
            <TextField id="standard-basic" label="Россия" variant="standard" />
          </div>
          <div className="mt-2 lg:mt-0">
            <p className="text-xs font-bold ">Город:</p>
            <TextField id="standard-basic" label="Москва" variant="standard" />
          </div>
          <div className="mt-2 lg:mt-0">
            <p className="text-xs font-bold ">Индекс:</p>
            <TextField
              id="standard-basic"
              label="Введите индекс"
              variant="standard"
            />
          </div>
          <div className="mt-2 lg:mt-0">
            <p className="text-xs font-bold ">Вес посылки:</p>
            <TextField id="standard-basic" label="0,5" variant="standard" />
          </div>
          <div className="mt-2 lg:mt-0">
            <p className="text-xs font-bold ">Дополнительные услуги:</p>
            <TextField
              id="standard-basic"
              label="Выберите услуги"
              variant="standard"
            />
          </div>
        </div>
        <div className="px-10 pb-10">
          {" "}
          <Button
            variant="contained"
            sx={{ borderRadius: 5, paddingX: 5, paddingY: 1.1 }}
            color="success"
          >
            Рассчитать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
