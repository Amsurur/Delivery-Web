import React from "react";

const CardRaspro = ({
  img,
  p,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  span1,
  span2,
  span3,
  span4,
  span5,
}) => {
  return (
    <div>
      <div className="grid grid-cols-[2fr,2fr] mb-5 gap-10 items-center">
        <div className="">
          <img className="w-[100%] ml-auto " src={img} alt="" />
        </div>
        <div className="dark:text-white">
          <p className="font-bold xl:mb-5 lg:mb-3 mb-2">{p}</p>
          <div className="xl:mb-10 lg:mb-7">
            <p className="text-xs flex ">
              {p1}
              <span className="font-bold">{span1}</span>
            </p>
            <p className="text-xs flex">
              {p2}
              <span className="text-[#01CD7D] font-bold">{span2}</span>
            </p>
            <p className="text-xs flex">
              {p3}
              <span className="text-[#01CD7D] font-bold">{span3}</span>
            </p>
          </div>
          <div className="xl:mb-10 lg:mb-7 sm:mb-5 mb-10">
            <p className="text-xs flex">
              {p4} <span className="text-[#01CD7D] font-bold">{span4}</span>
            </p>
            <p className="text-xs">
              {p5} <span className="text-[#01CD7D]">{span5}</span>
            </p>
          </div>
          <p className=" text-xs text-[#01CD7D]">{p6}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRaspro;
