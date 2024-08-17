import React, { useState } from "react";
import "./ProductsPage.css";
import { FaAngleRight } from "react-icons/fa";
import ProductImg_1 from "../Assets/ProductImg_1.jpeg";
import ProductImg_2 from "../Assets/ProductImg_2.jpeg";
import ProductImg_3 from "../Assets/ProductImg_3.jpeg";
import Slider from "react-slick";

const Products = () => {
  const [checkCurrent, setCheckCurrent] = useState(1);

  const handleClick = (index) => {
    setCheckCurrent(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="product-page text-white bg-[#242424] h-full w-full">
      <div className="product-page-title p-10 flex justify-between items-center">
        <div className="headings-product">
          <h1 className="flex text-[#FFAB17] items-center px-4 py-2 relative mr-4">
            <span className="h-3 w-3 bg-[#FFAB17] rounded-full mr-3"></span>
            Our Projects
          </h1>
          <h1 className="font-bold text-4xl">We Case Studies Best Work</h1>
        </div>
        <ul className="buttons flex justify-between items-center gap-5">
          {["All Products", "Business", "Development", "Support"].map(
            (text, index) => (
              <li
                key={index}
                className={`underline-animationProducts ${
                  checkCurrent === index + 1 ? "underline-active" : ""
                }`}
              >
                <button
                  className={`font-bold text-xl`}
                  onClick={() => handleClick(index + 1)}
                >
                  {text}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="product-images-section overflow-x-hidden h-full w-full">
        <Slider {...settings}>
          {productData.map((currElem, currIndex) => {
            return (
              <div
                className={`product-${currIndex + 1} relative w-full h-full`}
              >
                <div className="w-full h-full">
                  <img src={currElem.img} alt="" className="w-full h-full" />
                </div>
                <div className="product-decription flex justify-between items-center gap-5 rounded-2xl h-56 w-[22rem] p-10 bg-white text-black absolute top-[90%] left-[10%]">
                  <div>
                    <h1 className="font-bold text-xl pt-4">{currElem.title}</h1>
                    <p className="text-sm font-md text-gray-500">
                      {currElem.description}
                    </p>
                  </div>
                  <div className="group p-3 bg-black rounded-full hover:bg-[#FFAB17] transition duration-300 ease-in-out cursor-pointer">
                    <div className="bg-white p-1 text-black rounded-full group-hover:text-[#FFAB17] transition duration-300 ease-in-out">
                      {<currElem.icon />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

const productData = [
  {
    img: ProductImg_1,
    title: "Product to Satelite",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, laboriosam!",
    icon: FaAngleRight,
  },
  {
    img: ProductImg_2,
    title: "Product to Satelite",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, laboriosam!",
    icon: FaAngleRight,
  },
  {
    img: ProductImg_3,
    title: "Product to Satelite",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, laboriosam!",
    icon: FaAngleRight,
  },
];

export default Products;
