import React from "react";
import "../style.css";
const Blogs = ({ img, p1, p2, p3 }) => {
  return (
    <div>
      <div className="rounded-3xl dark:bg-black dark:text-[#01CD7D] border-[#01CD7D] border-2 card mb-10">
        <img className="rounded-t-3xl" src={img} alt="" />
        <div className="p-5">
          <p className="font-bold text-lg mt-6 mb-4">{p1}</p>
          <div className="flex items-center justify-between pb-5">
            <p>{p2}</p>
            <p className="flex items-center gap-2">
              <span>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.44385 16.5259C13.3554 16.5259 16.5264 13.3549 16.5264 9.44336C16.5264 5.53179 13.3554 2.36084 9.44385 2.36084C5.53228 2.36084 2.36133 5.53179 2.36133 9.44336C2.36133 13.3549 5.53228 16.5259 9.44385 16.5259Z"
                    stroke="#919191"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M9.44336 5.31189V9.44336H13.5748"
                    stroke="#919191"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Читать: 8 минут
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
