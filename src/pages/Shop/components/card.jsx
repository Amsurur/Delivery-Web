import React from "react";
import "./style.css";
const Mycard = ({ img, p }) => {
  return (
    <div>
      <div className="card grid grid-cols-1  p-10">
        <img className="mb-10" src={img} alt="" />
        <p className=" font-bold">{p}</p>
      </div>
    </div>
  );
};

export default Mycard;
