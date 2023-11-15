import React from "react";
import "../style.css";

const Blogers = ({ img, img2, p1, p2, p3, span1, span2, p4 }) => {
  return (
    <div className="sm:flex dark:bg-black dark:text-white items-center sec3 gap-5 p-5">
      <div className="sm:mb-0 mb-10">
        <img src={img} alt="" />
      </div>
      <div>
        <div>
          <p className="font-bold">{p1}</p>
          <img src={img2} alt="" />
          <p className="lg:my-10 my-5">{p2}</p>
        </div>
        <div>
          <p>
            <span className="font-bold mr-3">{span1}</span>
            {p3}
          </p>
          <p>
            <span className="font-bold mr-3">{span2}</span>
            {p4}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogers;
