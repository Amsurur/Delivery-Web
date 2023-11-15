import { Button } from "@mui/material";
import React from "react";

const Section1 = ({ img, p1, p2, p3 }) => {
  return (
    <div>
      <section className="mt-32">
        <div className="sec1 w-[95%] items-center gap-10 p-10 grid md:grid-cols-[1fr,2fr] mx-auto">
          <div className="lg:pl-14">
            <img className="w-[100%]" src={img} alt="" />
          </div>
          <div className="lg:pr-48">
            <p className="text-white dark:text-black md:text-[26px] sm:text-[20px] text-[16px] font-bold">
              {p1}
            </p>
            <p className=" text-white  dark:text-black  my-6">{p2}</p>
            <Button variant="contained" color="success">
              {p3}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
