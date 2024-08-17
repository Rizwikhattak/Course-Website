import React, { useState } from "react";
import Slider from "react-slick";
import { FaTimes } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesMainImg from "../Assets/servicesMainImg.png";
import servicesCaroouselImg_1 from "../Assets/ServicesCarouselImg_1.jpg";
import servicesCaroouselImg_2 from "../Assets/ServicesCarouselImg_2.jpg";
import servicesCaroouselImg_3 from "../Assets/ServicesCarouselImg_3.jpg";
import servicesCaroouselImg_4 from "../Assets/ServicesCarouselImg_4.jpg";
import servicesCaroouselImg_5 from "../Assets/ServicesCarouselImg_5.jpg";

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className="custom-arrow-container custom-next-container">
      <div
        className={`${className} custom-arrow custom-next`}
        onClick={onClick}
      />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className="custom-arrow-container custom-prev-container">
      <div
        className={`${className} custom-arrow custom-prev`}
        onClick={onClick}
      />
    </div>
  );
};

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
    <section className="services-page w-full h-full bg-[#242424] relative">
      <div
        className="services-content bg-cover bg-center w-full h-80 flex flex-col gap-5 justify-center items-center"
        style={{ backgroundImage: `url(${servicesMainImg})` }}
      >
        <h1 className="flex text-[#FFAB17] text-xl items-center justify-center px-4 py-2 relative mr-4 font-bold">
          <span className="h-3 w-3 bg-[#FFAB17] rounded-full mr-3"></span>
          WHAT WE DO
        </h1>
        <h1 className="text-4xl font-bold text-white text-center">
          We High Service That Stand
        </h1>
      </div>

      <div className="services-carousel px-5 md:px-10 relative top-[-80px]">
        <Slider {...settings}>
          {[
            servicesCaroouselImg_1,
            servicesCaroouselImg_2,
            servicesCaroouselImg_3,
            servicesCaroouselImg_4,
            servicesCaroouselImg_5,
          ].map((currElem, cur) => (
            <div
              key={cur}
              className="carousel-card text-black bg-white rounded-lg"
              onClick={() => openModal(currElem)}
            >
              <div className="carImg">
                <img
                  src={currElem}
                  alt=""
                  className="w-full h-64 object-cover rounded-lg cursor-pointer"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-25 flex justify-center items-center z-50">
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl cursor-pointer z-20"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt=""
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />
          </div>
          <div className="absolute inset-0" onClick={closeModal}></div>
        </div>
      )}
    </section>
  );
};

export default Services;
