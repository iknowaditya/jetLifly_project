import React, { useEffect, useRef } from "react";
import img1 from "../Assets/48.jpg";
import img2 from "../Assets/49.jpg";
import img3 from "../Assets/50.jpg";
import img4 from "../Assets/51.jpg";
import img5 from "../Assets/52.jpg";
import ScrollCarousel from "scroll-carousel";
import "scroll-carousel/dist/scroll.carousel.min.css";

const Featured = () => {
  // Use useRef to store the ScrollCarousel instance
  const myCarouselRef = useRef(null);

  useEffect(() => {
    // Initialize the carousel on component mount with custom options
    myCarouselRef.current = new ScrollCarousel(".my-carousel", {
      speed: 7,
      smartSpeed: true,
      autoplay: 5,
      loop: true,
      direction: "rtl",
      margin: 10,
    });

    // Clean up the carousel on component unmount
    // return () => {
    //   // Check if myCarouselRef.current is defined before destroying
    //   if (myCarouselRef.current) {
    //     myCarouselRef.current.destroy();
    //   }
    // };
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <div className="featured my-20">
      <div className="mx-5 my-10 flex items-center justify-center ">
        <h1 className="text-3xl font-sans font-bold text-neutral-800 sm:text-5xl">
          Featured Private Jet
        </h1>
      </div>
      <div className="relative my-carousel  py-5 border">
        <div className="my_slide  h-96 w-[310px]  rounded-md">
          <img
            className="h-full w-full object-cover rounded-md"
            src={img1}
            alt="img1"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent rounded-md via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/60 duration-500 "></div>
          <div className="absolute inset-x-0 -bottom-5 p-6 text-white text-center    ">
            <h1 className="flex justify-center items-center text-2xl text-white font-medium mb-2">
              Aspen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              Florida
            </h1>
          </div>
        </div>
        <div className="my_slide  h-96 w-[310px] rounded-md">
          <img
            className="h-full w-full object-cover rounded-md"
            src={img2}
            alt="img1"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/60 duration-500 "></div>
          <div className="absolute inset-x-0 -bottom-5 p-6 text-white text-center    ">
            <h1 className="flex justify-center items-center text-2xl text-white font-medium mb-2">
              Chicago
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              New York
            </h1>
          </div>
        </div>
        <div className="my_slide  h-96 w-[310px]  rounded-md">
          <img
            className="h-full w-full object-cover rounded-md"
            src={img3}
            alt="img1"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/60 duration-500 "></div>
          <div className="absolute inset-x-0 -bottom-5 p-6 text-white text-center    ">
            <h1 className="flex justify-center items-center text-2xl text-white font-medium mb-2">
              Geneva
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              Zurich
            </h1>
          </div>
        </div>
        <div className="my_slide  h-96 w-[310px]   rounded-md">
          <img
            className="h-full w-full object-cover rounded-md"
            src={img4}
            alt="img1"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/60 duration-500 "></div>
          <div className="absolute inset-x-0 -bottom-5 p-6 text-white text-center    ">
            <h1 className="flex justify-center items-center text-2xl text-white font-medium mb-2">
              Nice
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              Paris
            </h1>
          </div>
        </div>
        <div className="my_slide  h-96 w-[310px]   rounded-md">
          <img
            className="h-full w-full object-cover rounded-md"
            src={img5}
            alt="img1"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/60 duration-500 "></div>
          <div className="absolute inset-x-0 -bottom-5 p-6 text-white text-center    ">
            <h1 className="flex justify-center items-center text-2xl text-white font-medium mb-2">
              St Moritz
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              Rome
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
