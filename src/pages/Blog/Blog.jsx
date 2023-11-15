import React from "react";
import "../Home/style.css";
import Blogs from "./components/Blogs";
import img1 from "../../assets/image 1.svg";
import img2 from "../../assets/image 1 (1).svg";
import img3 from "../../assets/image3.svg";
import img4 from "../../assets/image4.svg";
import img5 from "../../assets/image5.svg";
import img6 from "../../assets/image6.svg";
import img7 from "../../assets/image7.svg";
import img8 from "../../assets/image8.svg";
import img9 from "../../assets/image9.svg";
import img10 from "../../assets/image10.svg";
import PreFooter from "../../components/PreFooter/PreFooter";
const Blog = () => {
  return (
    <div>
      <div className="sec1 mb-10 mt-10 w-[90%] mx-auto dark:text-[#01CD7D] text-white md:px-32 sm:px-20 px-10 p-10">
        <p className="text-gray-400 text-xs">Главная / Блог</p>
        <p className="sm:text-3xl text-2xl font-bold mt-5">Блог</p>
      </div>
      <div className="grid md:grid-cols-3 mt-20 sm:grid-cols-2 sm:w-[80%] w-[70%] mx-auto gap-5">
        <Blogs
          img={img1}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img2}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img3}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img4}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img5}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img6}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img7}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img8}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img9}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img10}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img5}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
        <Blogs
          img={img3}
          p1="Интернет-магазин Urban Outfitters в UK: обзор"
          p2="22.10.2021"
        />
      </div>
      <div className="mt-32">
        <PreFooter />
      </div>
    </div>
  );
};

export default Blog;
