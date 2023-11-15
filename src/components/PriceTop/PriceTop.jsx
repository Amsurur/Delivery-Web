import React from "react";
import "../../pages/Home/style.css";
import { Button } from "@mui/material";

const PriceTop = ({ img, img2, img3, img4, p1, p2 }) => {
  return (
    <div>
      <div className="grid md:grid-cols-4 dark:text-white mt-20 sm:grid-cols-2 items-center mb-20 w-[80%] mx-auto">
        <div className="p-5 lg:w-[80%]">
          <img className="rounded-full" src={img} alt="" />
          <p className="font-bold my-5 text-lg">{p1}</p>
          <p className="leading-7">{p2}</p>
        </div>
        <div className="p-5 lg:w-[80%]">
          <img className="rounded-full" src={img2} alt="" />
          <p className="font-bold my-5 text-lg">{p1}</p>
          <p className="leading-7">{p2}</p>
        </div>
        <div className="p-5 lg:w-[80%]">
          <img src={img3} className="rounded-full" alt="" />
          <p className="font-bold my-5 text-lg">{p1}</p>
          <p className="leading-7">{p2}</p>
        </div>
        <div className="p-5 lg:w-[80%]">
          <img className="rounded-full" src={img4} alt="" />
          <p className="font-bold my-5 text-lg">{p1}</p>
          <p className="leading-7">{p2}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceTop;
