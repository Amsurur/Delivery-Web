import React from "react";
import "./style.css";
const Card = ({ img, p1, p2 }) => {
  return (
    <div className="card dark:bg-gray-400 dark:text-white p-8">
      <img className="" src={img} alt="" />
      <p className="font-bold mt-3 mb-2">{p1}</p>
      <p className="p2 dark:text-white">{p2}</p>
    </div>
  );
};

export default Card;
