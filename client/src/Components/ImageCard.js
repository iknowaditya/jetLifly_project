import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/47.jpg";
import img2 from "../Assets/48.jpg";
import img3 from "../Assets/49.jpg";
import img4 from "../Assets/50.jpg";
import img5 from "../Assets/51.jpg";

function ImageCard() {
  const [liked, setLiked] = useState(Array(data.length).fill(false));
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 300,
    pauseOnHover: true,
    focusOnSelect: true,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleLikeToggle = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="relative ">
      <div className="mx-5 mt-20 flex items-center justify-center ">
        <h1 className="md:text-5xl text-4xl font-bitter_heading font-bold text-neutral-800 ">
          Featured Travel
          <div className="flex justify-end">
            <div className="w-36 h-2  bg-teal-500  rounded-xl " />
          </div>
        </h1>
      </div>

      <div className="flex lg:max-w-[1280px] m-auto items-center justify-between  mt-28  ">
        <div className="text-black flex justify-start items-center ml-10 font-bitter_heading font-bold text-2xl  ">
          <span className="text-red-500 mr-1 ">{currentSlide + 1}</span> of{" "}
          {data.length}
        </div>

        <div className="flex justify-end items-center mr-10 gap-2 ">
          {/* add nexArrow or prevArrow both button here in sae line in right side of crousel count */}
          <div
            className="nextArrow w-10 h-10 cursor-pointer hover:text-red-500 duration-500"
            onClick={handlePrevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer hover:text-red-500 duration-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div
            className="prevArrow w-10 h-10 cursor-pointer hover:text-red-500 "
            onClick={handleNextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer hover:text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* cards section.. */}
      <div className="flex flex-col lg:flex-row lg:gap-4 justify-between lg:max-w-[1280px] m-auto  lg:mt-12 ">
        <div className="lg:w-96 h-96 flex flex-col items-start justify-center mt-4 px-6">
          <h1 className="lg:text-4xl text-3xl font-bitter_heading font-bold text-start text-neutral-800">
            Populer destination
          </h1>
          <span className="mt-8 text-lg font-jost font-medium text-neutral-800">
            Explore Luxury Jet Travel with Ease.
          </span>
          <p className="mt-1 text-lg font-jost tracking-normal text-justify leading-relaxed text-neutral-500">
            Skip the hassle, explore effortlessly with our travel services
            personalized just for you.
          </p>
          <div className="flex justify-start items-center mt-4">
            <button className="py-2.5 px-4 mr-2 mb-2 text-base font-medium focus:outline-none rounded-lg focus:z-10 focus:ring-1 bg-teal-600 text-white hover:text-white hover:bg-teal-700 duration-500">
              Get a quote
            </button>
            <img src="/images/flight-icon.png" alt="" className="ml-4" />
          </div>
        </div>

        <div className="lg:w-[70%]  lg:mt-0 ">
          <div className="">
            <Slider ref={sliderRef} {...settings}>
              {data.map((index, i) => (
                <div
                  key={i}
                  className="relative h-[100%] rounded-2xl  border border-neutral-500 p-2"
                >
                  <div className="relative h-[400px] flex justify-center items-center ">
                    <img
                      src={index.img}
                      alt=""
                      className="h-[100%] w-full  object-cover opacity-100   rounded-2xl"
                    />

                    <div className="flex items-center justify-center">
                      <div className="absolute left-0 bottom-0 w-[100%]   p-3 text-white bg-black bg-opacity-60 rounded-b-2xl">
                        <p className="text-lg mb-2 font-jost font-medium">
                          {index.text}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-2xl font-jost text-neutral-200">
                            <span className="text-teal-500 text-3xl font-crazy">
                              <span className="text-rose-500">$ </span>
                              {index.price}
                            </span>
                          </p>
                          <div
                            className={`cursor-pointer transition-colors ${
                              liked[i]
                                ? "text-[#ed1d24] hover:text-[#ed1d24]"
                                : "text-white hover:text-red-500"
                            }`}
                            onClick={() => handleLikeToggle(i)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill={liked[i] ? "red" : "none"}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 p-6 text-white">
                    <p className="text-3xl font-bold font-crazy ">
                      {index.title}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "St Moritz > Rome",
    img: img1,
    text: "From",
    price: "2,500",
  },
  {
    title: "Chicago > New York",
    img: img2,
    text: "From",
    price: "3,700",
  },
  {
    title: "Nice > Paris",
    img: img3,
    text: "From",
    price: "2,900",
  },
  {
    title: "Geneva > Zurich",
    img: img4,
    text: "From",
    price: "1,500",
  },
  {
    title: "Aspen > Florida",
    img: img5,
    text: "From",
    price: "3,000",
  },
];
export default ImageCard;
