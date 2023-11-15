import React from "react";
const BuyCard = ({ img, p1, p2, p3 }) => {
  return (
    <div>
      <div className="grid mb-10 items-center gap-10 mt-10 md:grid-cols-[1fr,3fr]">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <div className="flex items-center mb-5">
            <p className=" text-5xl border-r-2 pr-3  text-[#01CD7D]">{p1}</p>
            <p className="font-extrabold pl-3 w-[40%]">{p2}</p>
          </div>
          <p className="leading-6 text-[#1F2428] dark:text-gray-500  w-[90%]">
            {p3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
