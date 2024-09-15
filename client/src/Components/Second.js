import React from "react";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import "animate.css/animate.min.css";
import air1 from "../Assets/air1.jpg";
import air2 from "../Assets/light.jpg";
import air3 from "../Assets/Midsize Jet.jpg";
import air4 from "../Assets/Super Mid Size.jpg";
import air5 from "../Assets/air3.jpg";
import air6 from "../Assets/HeavyJet.jpg";

const Second = () => {
  return (
    <>
      <div className="py-12  dot-pattern ">
        <div className="lg:max-w-[1200px] m-auto  bg-neutral-100 rounded-3xl py-12">
          <div className="relative z-20 text-center">
            <h2 className="text-xl font-bold lg:text-4xl md:text-2xl font-bitter_heading tracking-normal  leading-normal  text-neutral-800">
              What are you looking for
              <span className="text-teal-500 text-5xl">?</span>
            </h2>
            <p className="px-6 pt-3 text-sm text-green-darker lg:text-lg md:text-base md:px-0 font-body tracking-tighter ">
              Check out our offerings for different types of Jets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-6 lg:px-12 py-12">
            <div className="relative mx-auto w-full">
              <a
                href="/"
                className={`relative inline-block duration-500 ease-in-out transition-transform transform hover:-translate-y-1 w-full animate__animated animate__fadeInUp`}
                // style={{ animationDuration: fadeInUpDuration }}
              >
                <div className="shadow p-4 rounded-lg bg-white h-[350px]">
                  <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
                      <div className="absolute inset-0   ">
                        <img
                          src={air1}
                          alt="contact"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h2
                      className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                      title="New York"
                    >
                      Very Light Jet
                    </h2>
                    <p className="mt-2 text-sm text-gray-800 ">
                      Efficient and Affordable Aviation for Short-Distance
                      Travel with Very Light Jets.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="relative mx-auto w-full">
              <a
                href="/"
                className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-1 w-full"
              >
                <div className="shadow p-4 rounded-lg bg-white h-[350px]">
                  <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
                      <div className="absolute inset-0   ">
                        <img
                          src={air2}
                          alt="contact"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h2
                      className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                      title="New York"
                    >
                      Light Jet
                    </h2>
                    <p className="mt-2 text-sm text-gray-800 ">
                      Seamless Business Travel-Experience Comfort and Speed with
                      Modern Light Jets.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="relative mx-auto w-full">
              <a
                href="/"
                className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-1 w-full"
              >
                <div className="shadow p-4 rounded-lg bg-white h-[350px]">
                  <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
                      <div className="absolute inset-0   ">
                        <img
                          src={air3}
                          alt="contact"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h2 className="font-medium text-base md:text-lg text-gray-800">
                      Midsize Cabin Jets
                    </h2>
                    <p className="mt-2 text-sm text-gray-800 ">
                      Midsize Cabin Jets Redefining Air Travel Comfort.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="relative mx-auto w-full">
              <a
                href="/"
                className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-1 w-full"
              >
                <div className="shadow p-4 rounded-lg bg-white h-[350px]">
                  <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
                      <div className="absolute inset-0   ">
                        <img
                          src={air4}
                          alt="contact"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
                      Super Midsize Cabin Jets
                    </h2>
                    <p className="mt-2 text-sm text-gray-800 ">
                      This aircraft offering a perfect blend of spacious luxury
                      for elevated air travel experiences.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="relative mx-auto w-full">
              <a
                href="/"
                className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-1 w-full"
              >
                <div className="shadow p-4 rounded-lg bg-white h-[350px]">
                  <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
                      <div className="absolute inset-0   ">
                        <img
                          src={air5}
                          alt="contact"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
                      Heavy Jets
                    </h2>
                    <p className="mt-2 text-sm text-gray-800 ">
                      Its spacious and powerful aircraft designed for
                      comfortable, and long-range travel experiences.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="relative mx-auto w-full">
              <a
                href="/"
                className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-1 w-full"
              >
                <div className="shadow p-4 rounded-lg bg-white h-[350px]">
                  <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
                      <div className="absolute inset-0   ">
                        <img
                          src={air6}
                          alt="contact"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h2 className="font-medium text-base md:text-lg text-gray-800 ">
                      Executive Liners
                    </h2>
                    <p className="mt-2 text-sm text-gray-800 ">
                      Its designed for stylish, efficient, and comfortable
                      travel experiences for business travelers.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
