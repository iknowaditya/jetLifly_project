import React from "react";
// import { motion } from "framer-motion";

import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { MdOutlineFlightClass } from "react-icons/md";
import { BsSuitcase } from "react-icons/bs";

// imagecard icons..
import { GiWineBottle } from "react-icons/gi";
import { MdOutlineAirlineSeatIndividualSuite } from "react-icons/md";
import { RiWheelchairLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { GrWifi } from "react-icons/gr";

// import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from "../Assets/JetLyfly AI Images/Light Jets/new.jpg";
import img2 from "../Assets/JetLyfly AI Images/Light Jets/photo-of-private-light-jets-without-background (2).jpg";
import img3 from "../Assets/JetLyfly AI Images/Midsize cabin jets/5.jpg";
import img4 from "../Assets/JetLyfly AI Images/Heavy jets/photo-of-private-heavy-jet-with-no-background (1).jpg";
import img5 from "../Assets/JetLyfly AI Images/Midsize cabin jets/photo-of-midsize-cabin-jet-with-no-background (1).jpg";
import img6 from "../Assets/JetLyfly AI Images/Midsize cabin jets/photo-of-midsize-cabin-jet-with-no-background.jpg";
import img7 from "../Assets/JetLyfly AI Images/Biz liners Executive/photo-of-executive-linersbiz-liners-jet-inside-wi (1).jpg";
import img8 from "../Assets/JetLyfly AI Images/Biz liners Executive/photo-of-executive-linersbiz-liners-jet-with-no-b.jpg";

const FleetPage = () => {
  const fleetData = [
    {
      model: "Light Jet",
      flightText: "Flight range of up 5 hrs",
      seating: "Seating capacity of 6 passengers",
      bags: "Up to 30 bags at 15kg each",
      rate: " 2,750/hr",
      description: "Description of Jet Model 1.",
      image: img1,
    },
    {
      model: "Super Light Jet",
      flightText: "Flight range of up 5 hrs",
      seating: "Seating capacity of 7 passengers",
      bags: "Up to 30 bags at 15kg each",
      rate: " 2,750/hr",
      description: "Description of Jet Model 2.",
      image: img2,
    },
    {
      model: "Midsize Jet",
      flightText: "Flight range of up 5 hrs",
      seating: "Seating capacity of 9 passengers",
      bags: "Up to 30 bags at 20kg each",
      rate: " 2,750/hr",
      description: "Description of Jet Model 2.",
      image: img3,
    },
    {
      model: "Heavy Jet",
      flightText: "Flight range of up 4 hrs",
      seating: "Seating capacity of 13 passengers",
      bags: "Up to 30 bags at 22kg each",
      rate: " 2,750/hr",
      description: "Description of Jet Model 2.",
      image: img4,
    },
    {
      model: "Midsize Long-Range Jet",
      flightText: "Flight range of up 6 hrs",
      seating: "Seating capacity of 15 passengers",
      bags: "Up to 30 bags at 22kg each",
      rate: " 2,750/hr",
      description: "Description of Jet Model 2.",
      image: img5,
    },
    {
      model: "Super Midsize Jet",
      flightText: "Flight range of up 4 hrs",
      seating: "Seating capacity of 10 passengers",
      bags: "Up to 30 bags at 25kg each",
      rate: " 2,750/hr",
      description: "Description of Jet Model 2.",
      image: img6,
    },
    {
      model: "Executive Liners-Bizliners",
      flightText: "Flight range of up 5 hrs",
      seating: "Seating capacity of 12 passengers",
      bags: "Up to 30 bags at 25kg each",
      rate: " 2,750/hr",
      description: "Description of Jet Model 2.",
      image: img7,
    },
    {
      model: "Business Jet",
      flightText: "Flight range of up 4 hrs",
      seating: "Seating capacity of 10 passengers",
      bags: "Up to 30 bags at 25kg each",
      rate: " 2,750/hr",
      description: "Description of Jet Model 2.",
      image: img8,
    },
    // Add more fleet items as needed
  ];

  return (
    <>
      {/* fleet heading and image cards */}
      <div className="flex flex-col items-center xl:max-w-[1280px] w-full ">
        <section
          className="flex flex-col w-full h-[600px]  xl:h-[900px] 2xl:h-[1200px] items-center "
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1635672033288-0d05f2062105?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></section>
        <section className="py-8 text-center ">
          <h2 className="text-5xl text-neutral-800 font-sans font-bold py-12">
            Luxury{" "}
            <span class="relative inline-flex justify-center whitespace-nowrap font-bold text-teal-500">
              <svg
                class="absolute -bottom-6 hidden w-64 text-teal-400 sm:block"
                viewBox="0 0 490 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6312 17.089C14.4676 17.089 18.4867 16.911 22.3231 16.733C23.9673 16.733 25.4288 16.555 27.073 16.555C34.0151 16.199 40.9571 15.8429 47.8992 15.4869C56.3028 15.1309 64.5237 14.5969 72.9272 14.2408C84.8018 13.5288 96.6764 12.9948 108.551 12.2827C111.291 12.1047 114.032 12.1047 116.772 11.9267C123.714 11.5707 130.656 11.2147 137.598 11.0366C144.54 10.6806 151.482 10.3246 158.424 10.1466C161.165 9.96859 163.905 9.79058 166.645 9.79058C177.606 9.43455 188.75 9.07853 199.712 8.72251C206.471 8.5445 213.23 8.36649 220.172 8.01047C222.913 8.01047 225.47 7.83246 228.211 7.83246C238.806 7.65445 249.585 7.47644 260.181 7.29843C270.776 7.12042 281.19 6.94241 291.785 6.7644C294.526 6.7644 297.266 6.7644 300.189 6.7644C307.131 6.7644 313.89 6.7644 320.832 6.7644C331.611 6.7644 342.207 6.7644 352.985 6.58639C356.456 6.58639 359.927 6.58639 363.398 6.58639C370.706 6.58639 378.013 6.58639 385.321 6.58639C385.869 6.58639 386.6 6.58639 387.148 6.58639C370.706 6.7644 354.081 6.94241 337.64 7.29843C330.698 7.47644 323.938 7.47644 316.996 7.65445C314.073 7.65445 310.967 7.65445 308.044 7.83246C297.997 8.01047 288.132 8.36649 278.084 8.5445C266.575 8.90052 255.065 9.07853 243.556 9.43455C241.547 9.43455 239.72 9.61256 237.71 9.61256C231.499 9.96859 225.47 10.1466 219.259 10.5026C206.836 11.0366 194.414 11.5707 181.991 12.1047C180.164 12.1047 178.337 12.2827 176.51 12.4607C170.482 12.8168 164.27 13.3508 158.242 13.7068C147.281 14.4188 136.502 15.1309 125.541 15.8429C122.618 16.0209 119.512 16.377 116.589 16.555C109.647 17.089 102.705 17.623 95.763 18.3351C86.9941 19.0471 78.0424 19.7592 69.2735 20.4712C57.0335 21.5393 44.6109 22.6073 32.3709 23.6754C29.4479 23.8534 26.5249 24.2094 23.4193 24.3874C18.1213 24.9215 12.8234 25.4555 7.52554 25.9895C6.97749 25.9895 6.42943 26.3455 6.42943 27.0576C6.42943 27.5916 6.97749 28.1257 7.52554 28.1257C9.53509 28.1257 11.362 28.3037 13.3715 28.3037C13.0061 29.1937 12.8234 29.7277 12.8234 30.2618C12.8234 32.2199 14.4676 34 16.6599 34C31.8228 33.1099 46.8031 32.0419 61.9661 31.3298C75.1195 30.7958 88.2729 30.0838 101.426 29.5497C115.859 28.8377 130.473 28.1257 144.906 27.5916C149.473 27.4136 154.04 27.2356 158.607 26.8796C159.886 26.8796 161.165 26.7016 162.626 26.7016C186.01 26.1675 209.394 25.4555 232.778 24.9215C245.2 24.5654 257.806 24.2094 270.228 24.0314C274.796 23.8534 279.18 23.8534 283.747 23.6754C307.679 23.3194 331.611 22.9634 355.543 22.6073C365.773 22.4293 376.004 22.2513 386.234 22.0733C395.003 21.8953 403.772 21.8953 412.541 21.5393C419.848 21.3613 426.973 21.0052 434.281 20.8272C437.934 20.6492 441.588 20.6492 445.059 20.4712C453.28 19.9372 461.501 19.4031 469.722 18.8691C469.174 19.5812 469.174 20.6492 469.356 21.3613C469.539 22.2513 470.087 22.9633 471.001 23.3194C471.731 23.6754 472.827 24.0314 473.558 23.6754C475.385 22.9634 477.212 22.2513 478.856 21.5393C478.856 21.5393 478.856 21.5393 478.673 21.5393C478.856 21.5393 478.856 21.3613 479.039 21.3613C479.221 21.3613 479.404 21.1832 479.404 21.1832H479.221C480.135 20.8272 481.048 20.4712 482.144 19.9372C483.058 19.5812 484.154 19.0471 485.067 18.6911C486.164 18.1571 487.077 17.623 488.173 17.089C489.269 16.555 490 15.1309 490 13.8848C490 13.1728 489.817 12.6387 489.452 11.9267C489.087 11.2147 488.173 10.3246 487.26 10.1466C486.346 9.96859 485.433 9.79058 484.519 9.79058C484.337 9.79058 484.154 9.79058 483.971 9.79058C483.423 9.79058 482.693 9.79058 482.144 9.96859C480.683 10.1466 479.404 10.3246 477.943 10.3246C476.847 10.3246 475.75 10.5026 474.472 10.5026C471.366 10.6806 468.443 10.8586 465.337 11.2147C464.607 11.2147 463.693 11.3927 462.962 11.3927C463.328 11.0366 463.51 10.6806 463.51 10.3246C463.693 9.96859 463.693 9.61257 463.693 9.25654C463.693 9.07853 463.693 8.72251 463.876 8.5445C463.876 8.18848 463.876 7.83246 463.693 7.65445C463.693 7.65445 463.876 7.65445 463.876 7.47644C464.424 7.12042 464.972 6.7644 465.337 6.05236C465.703 5.51832 465.885 4.80628 465.885 4.09424C465.885 3.3822 465.703 2.84817 465.337 2.13613C465.155 1.95812 464.972 1.60209 464.789 1.42408C464.241 0.890052 463.693 0.712042 463.145 0.534031C462.049 0.17801 460.77 0 459.491 0C458.395 0 457.482 0 456.386 0C454.924 0 453.463 0 452.001 0C449.992 0 447.799 0 445.79 0C440.309 0 434.829 0 429.348 0C424.233 0 418.935 0 413.82 0C409.07 0 404.503 0 399.753 0C380.936 0 362.302 0.17801 343.486 0.356021C329.419 0.534031 315.352 0.712042 301.285 0.712042C295.074 0.712042 288.68 0.890052 282.468 1.06806C268.402 1.42408 254.335 1.60209 240.268 1.95812C236.249 1.95812 232.23 2.13613 228.211 2.13613C225.836 2.13613 223.643 2.31414 221.268 2.31414C207.384 2.84817 193.5 3.3822 179.616 3.91623C175.414 4.09424 171.212 4.27225 166.828 4.45026C164.453 4.45026 162.078 4.62827 159.703 4.80628C145.819 5.51832 132.118 6.23037 118.233 6.94241C111.109 7.29843 103.984 7.65445 96.8591 8.18848C84.6192 8.90052 72.3792 9.61256 60.3219 10.5026C49.7261 11.2147 39.1303 11.7487 28.5345 12.2827C26.8903 12.4607 25.2461 12.4607 23.4193 12.6387C20.679 12.8168 17.9387 12.8168 15.1984 12.9948C12.8234 13.7068 10.2658 13.7068 7.89092 13.7068C7.70823 12.9948 6.97749 12.4607 6.42943 12.6387C4.78525 12.6387 3.32376 12.8168 1.67958 12.9948C0.948839 13.1728 0.218094 13.5288 0.0354073 14.2408C-0.147279 15.1309 0.40078 16.0209 1.13152 16.199C1.86227 16.377 2.59301 16.555 3.32376 16.733C4.05451 16.911 4.60256 16.911 5.33331 16.911C7.16017 17.089 8.80435 17.089 10.6312 17.089ZM438.117 11.3927C440.309 11.3927 442.684 11.3927 444.876 11.3927C445.059 11.9267 445.425 12.2827 445.79 12.6387C444.876 12.6387 443.963 12.8168 443.232 12.8168C441.588 12.8168 439.944 12.9948 438.3 12.9948C430.992 13.1728 423.868 13.5288 416.56 13.7068C413.272 13.8848 409.983 14.0628 406.695 14.0628C401.58 14.0628 396.282 14.2408 391.167 14.2408C379.292 14.4188 367.6 14.5969 355.726 14.7749C332.707 15.1309 309.871 15.4869 286.853 15.8429C270.411 16.0209 253.969 16.555 237.528 17.089C212.865 17.801 188.02 18.3351 163.357 19.0471C158.424 19.2251 153.492 19.4031 148.559 19.7592C134.493 20.4712 120.426 21.0052 106.359 21.7173C92.6573 22.4293 78.7732 22.9634 65.0717 23.6754C63.7929 23.6754 62.5141 23.8534 61.2353 23.8534C64.889 23.4974 68.7254 23.3194 72.3792 22.9633C85.3499 22.0733 98.3206 21.0052 111.291 20.1152C115.859 19.7592 120.426 19.4031 124.81 19.0471C127.185 18.8691 129.56 18.6911 131.752 18.6911C145.454 17.9791 158.972 17.089 172.491 16.377C175.049 16.199 177.789 16.0209 180.347 15.8429C184.183 15.6649 188.02 15.4869 191.673 15.4869C205.557 14.9529 219.442 14.4188 233.326 13.8848C236.431 13.7068 239.537 13.7068 242.46 13.5288C243.191 13.5288 244.104 13.5288 244.835 13.5288C247.027 13.5288 249.219 13.5288 251.229 13.3508C265.113 12.9948 279.18 12.8168 293.064 12.4607C299.458 12.2827 305.852 12.1047 312.246 12.1047C332.89 11.9267 353.716 11.7487 374.36 11.5707C395.917 11.5707 417.108 11.3927 438.117 11.3927Z"
                  fill="currentColor"
                />
                <path
                  d="M38 42C38.5523 42 39 41.5523 39 41C39 40.4477 38.5523 40 38 40C37.4477 40 37 40.4477 37 41C37 41.5523 37.4477 42 38 42Z"
                  fill="currentColor"
                />
              </svg>
              Private
            </span>{" "}
            Jets
          </h2>
          <p className="mx-auto mt-8 max-w-4xl leading-snug text-gray-600 font-nunito text-base lg:text-lg">
            Experience the epitome of air travel with our premium heavy jet
            fleet, featuring the distinguished Legacy 600 and Challenger 850.
            Specifically designed for short to medium routes and the utmost
            comfort, these jets cater to your every need, whether business or
            leisure.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12">
          {fleetData.map((jet, index) => (
            <div
              key={index}
              className="p-4 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col"
            >
              <div className="relative mb-4">
                <a href="/">
                  <img
                    src={jet.image}
                    alt={jet.model}
                    className="shadow rounded-lg overflow-hidden border w-full"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 rounded-lg bg-gray-900 opacity-25"></div>
                </a>
                <a href="/">
                  <div className="text-xs absolute top-0 right-0 bg-gray-300 text-neutral-600 hover:text-neutral-800 hover:bg-gray-100 font-semibold  px-4 py-2  mt-3 mr-3   transition duration-500 ease-in-out rounded-full">
                    Featured
                  </div>
                </a>

                <div className="facility_icons absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-5 shadow rounded-full">
                  <div className="flex items-center justify-center gap-4 px-2 border text-xl text-neutral-600 h-10 w-64 rounded-full bg-gray-100">
                    <GiWineBottle />
                    <MdOutlineAirlineSeatIndividualSuite />
                    <RiWheelchairLine />
                    <MdOutlineHealthAndSafety />
                    <GiHotMeal />
                    <GrWifi />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-auto  mt-4">
                <a
                  href="/"
                  className="font-medium text-xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
                >
                  {jet.model}
                </a>

                <div className="flex items-start flex-col mt-2 sm:mt-4">
                  <div className="flex items-center">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
                      <PiAirplaneTakeoffLight className="w-6 h-6 text-teal-500 font-bold" />
                    </div>
                    <p className="text-gray-500 text-sm ml-2 sm:ml-4">
                      {jet.flightText}
                    </p>
                  </div>

                  <div className="flex items-center mt-2 sm:mt-4">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
                      <MdOutlineFlightClass className="w-6 h-6 text-teal-500 font-" />
                    </div>
                    <p className="text-gray-500 text-sm ml-2 sm:ml-4">
                      {jet.seating}
                    </p>
                  </div>

                  <div className="flex items-center mt-2 sm:mt-4">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
                      <BsSuitcase className="w-6 h-6 text-teal-500 font-" />
                    </div>
                    <p className="text-gray-500 text-sm ml-2 sm:ml-4">
                      {jet.bags}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 p-2">
                <div className="text-xs text-gray-900">
                  <p className="font-bold mb-1">FROM</p>
                  <p className="text-neutral-500 text-base font-semibold flex items-center ">
                    <span className="text-rose-600 text-xl font-semibold">
                      $
                    </span>
                    {jet.rate}
                  </p>
                </div>

                <button className="bg-teal-600 text-gray-200 hover:text-white hover:bg-teal-700 font-medium py-2 px-4 rounded-lg">
                  Get A Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <---------------------------------> */}
      {/* mention details about our product */}
      <section class="bg-white :bg-gray-900 mt-20">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:flex lg:items-center">
            <div class="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl :text-white">
                  explore our <br /> awesome places
                </h1>

                <div class="mt-2">
                  <span class="inline-block w-40 h-1 bg-teal-500 rounded-full"></span>
                  <span class="inline-block w-3 h-1 ml-1 bg-teal-500 rounded-full"></span>
                  <span class="inline-block w-1 h-1 ml-1 bg-teal-500 rounded-full"></span>
                </div>
              </div>

              <div class="md:flex md:items-start md:-mx-4">
                <span class="inline-block p-2 text-teal-500 bg-teal-100 rounded-xl md:mx-4 :text-white :bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div class="mt-4 md:mx-4 md:mt-0">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize :text-white">
                    elevate new Journies
                  </h1>

                  <p class="mt-3 text-gray-500 :text-gray-300">
                    Immerse yourself in luxury with exclusive destinations. Our
                    curated experiences redefine travel, offering personalized
                    adventures beyond expectations.
                  </p>
                </div>
              </div>

              <div class="md:flex md:items-start md:-mx-4">
                <span class="inline-block p-2 text-teal-500 bg-teal-100 rounded-xl md:mx-4 :text-white :bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <div class="mt-4 md:mx-4 md:mt-0">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize :text-white">
                    Zero Configuration
                  </h1>

                  <p class="mt-3 text-gray-500 :text-gray-300">
                    Say goodbye to complex setups. Experience smooth operations
                    with our zero-configuration approach.Enjoy hassle-free
                    solutions that adapt to your needs without the need for
                    manual adjustments.
                  </p>
                </div>
              </div>

              <div class="md:flex md:items-start md:-mx-4">
                <span class="inline-block p-2 text-teal-500 bg-teal-100 rounded-xl md:mx-4 :text-white :bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <div class="mt-4 md:mx-4 md:mt-0">
                  <h1 class="text-xl font-semibold text-gray-700 capitalize :text-white">
                    elegant Mode
                  </h1>

                  <p class="mt-3 text-gray-500 :text-gray-300">
                    Explore the epitome of refined taste and make every moment
                    an elegant affair.
                  </p>
                </div>
              </div>
            </div>

            <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img
                class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>

          <hr class="my-12 border-gray-200 :border-gray-700" />

          <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <svg
                width="74"
                height="50"
                viewBox="0 0 74 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="nonzero" fill="none">
                  <path
                    d="M63.8 38.46h.76l6.85 6.68v-6.68h2.2v10.72h-.83l-6.79-6.64v6.62h-2.2l.02-10.7zm-22.4 0v10.72h8.05V47.2h-5.87v-2.44H48v-2.02h-4.4v-2.3h5.86v-2.02l-8.04.04zm-13.16 0l4.4 10.72h2.2l4.4-10.72h-2.36l-3.16 7.84-3.12-7.84h-2.36zm-7.88 6.3v4.4h2.19v-4.4l4.05-6.31h-2.55l-2.6 4.41-2.54-4.41h-2.6l4.05 6.31zm-17.41 4.4h2.2l2.2-7.83 2.17 7.84h2.22l2.93-10.73H12.3l-1.9 7.24-1.88-7.24h-2.3l-1.96 7.27-1.9-7.27H0l2.95 10.72zm58.46 0h-2.55l-2.62-4.4h-1.99v4.41h-2.19V38.46h4.83c2.47 0 3.78 1.03 3.78 3.1 0 1.81-.97 2.71-2.01 2.94l2.75 4.66zm-4.12-6.42c1 0 1.37-.54 1.37-1.16 0-.62-.38-1.13-1.37-1.13h-3.04v2.29h3.04z"
                    fill="#646771"
                  />
                  <path
                    d="M37.7 20.97L64.32 0 50.46 28.36l-12.75-7.4zm-9.36-5.6l1.62.98L64.3 0 28.34 15.38zm-8.08-5.03L64.3 0 8.51 5.51l11.75 4.83z"
                    fill="#E3E5EB"
                  />
                  <path
                    d="M37.7 20.97l-6.6 11.25 9.75-9.44-3.14-1.81zm-7.74-4.62l-1.62-.97-8.08 10.17 9.94-5.78-.24-3.42z"
                    fill="#646771"
                  />
                  <path
                    d="M37.7 20.97l-6.6 11.25-1.14-15.87L64.3 0l-26.6 20.97zm-17.45 4.58l8.09-10.17L64.31 0 20.27 10.34l-.02 15.21z"
                    fill="#A5A8B0"
                  />
                </g>
              </svg>
            </div>

            <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <svg
                class="h-10 text-gray-500 fill-current :text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                //xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 316 60"
              >
                <g transform="translate(9.259 4.552) scale(.4941)">
                  <path d="M52.1 102.1V82.5c20.8 0 36.8-20.6 28.9-42.4-3-8.1-9.4-14.6-17.5-17.5-21.8-7.9-42.4 8.1-42.4 28.9H1.5c0-33.1 32-58.9 66.7-48.1 15.2 4.7 27.2 16.8 31.9 31.9 10.8 34.8-14.9 66.8-48 66.8z"></path>
                  <path
                    d="M32.6 63h19.5v19.5H32.6zm-15 34.5v-15h15v15h-15zM5 70h12.6v12.5H5z"
                    fill-rule="evenodd"
                  ></path>
                  <path d="M181.5 30.2c-5.8-4-13-6.1-21.4-6.1h-18.3v58.1h18.3c8.4 0 15.6-2.1 21.4-6.4 3.2-2.2 5.7-5.4 7.4-9.3s2.6-8.5 2.6-13.7c0-5.1-.9-9.7-2.6-13.6-1.7-3.8-4.2-6.9-7.4-9zm-29 3.8h5.8c6.4 0 11.7 1.3 15.7 3.7 4.4 2.7 6.7 7.8 6.7 15.1 0 7.6-2.3 12.9-6.7 15.8-3.8 2.5-9.1 3.8-15.6 3.8h-5.8V34z"></path>

                  <path d="M199 41.3h10.3v41H199zm47.8 3.4c-3.1-2.8-6.6-4.4-10.3-4.4-5.7 0-10.4 2-14.1 5.8s-5.5 8.8-5.5 14.7c0 5.8 1.8 10.7 5.5 14.7 3.7 3.8 8.4 5.8 14.1 5.8 4 0 7.4-1.1 10.2-3.3v1c0 3.4-.9 6-2.7 7.9-1.8 1.8-4.3 2.7-7.4 2.7-4.8 0-7.7-1.9-11.4-6.8l-7 6.7.2.3c1.5 2.1 3.8 4.2 6.9 6.2s6.9 3 11.5 3c6.1 0 11.1-1.9 14.7-5.6 3.7-3.7 5.5-8.7 5.5-14.9V41.3h-10.1v3.4zm-2.7 24.2c-1.8 2-4.1 3-7.1 3s-5.3-1-7-3c-1.8-2-2.7-4.7-2.7-8s.9-6.1 2.7-8.1 4.1-3.1 7-3.1c3 0 5.3 1 7.1 3.1 1.8 2 2.7 4.8 2.7 8.1s-1 6-2.7 8zm21.6-27.6H276v41h-10.3z"></path>

                  <path d="M298.6 30.3h-10.1v11.1h-5.9v9.4h5.9v17c0 5.3 1.1 9.1 3.2 11.3s5.8 3.3 11.1 3.3c1.7 0 3.4-.1 5-.2h.5v-9.4l-3.5.2c-2.5 0-4.1-.4-4.9-1.3s-1.2-2.7-1.2-5.4V50.7h9.6v-9.4h-9.6v-11zm57.9-6.2h10.3v58.1h-10.3zm114.4 43.5c-1.8 2.1-3.7 3.9-5.2 4.8-1.4.9-3.2 1.4-5.3 1.4-3 0-5.5-1.1-7.5-3.4s-3-5.2-3-8.7 1-6.4 2.9-8.6c2-2.3 4.4-3.4 7.4-3.4 3.3 0 6.8 2.1 9.8 5.6l6.8-6.5c-4.4-5.8-10.1-8.5-16.9-8.5-5.7 0-10.6 2.1-14.6 6.1s-6 9.2-6 15.3 2 11.2 6 15.3 8.9 6.1 14.6 6.1c7.5 0 13.5-3.2 17.5-9.1l-6.5-6.4zM513.2 47c-1.5-2-3.5-3.7-5.9-4.9-2.5-1.2-5.3-1.8-8.5-1.8-5.8 0-10.5 2.1-14 6.3-3.4 4.2-5.2 9.3-5.2 15.4 0 6.2 1.9 11.3 5.7 15.3 3.7 3.9 8.8 5.9 14.9 5.9 6.9 0 12.7-2.8 16.9-8.4l.2-.3-6.7-6.5c-.6.8-1.5 1.6-2.3 2.4-1 1-2 1.7-3 2.2-1.5.8-3.3 1.1-5.2 1.1-2.9 0-5.2-.8-7-2.5-1.7-1.5-2.7-3.6-2.9-6.2h27.3l.1-3.8c0-2.7-.4-5.2-1.1-7.6-.7-2.3-1.8-4.5-3.3-6.6zm-22.5 9.7c.5-2 1.4-3.6 2.7-4.9 1.4-1.4 3.2-2.1 5.4-2.1 2.5 0 4.4.7 5.7 2.1 1.2 1.3 1.9 2.9 2.1 4.8h-15.9zm62.1-12.3c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6s-4.7 5.9-4.7 10.2c0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4s7.6-1.6 10.9-4.3v3.4h10.1V55.9c.2-4.9-1.4-8.8-4.6-11.5zm-18.3 22.2c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4C545 73 542 74 538.3 74c-1.8 0-3.2-.4-4.1-1.2s-1.4-1.7-1.4-3 .6-2.4 1.7-3.2zm62.7-21.4c-2.9-3.2-6.9-4.8-12-4.8-4.1 0-7.4 1.2-9.9 3.5v-2.5h-10.1v41h10.3V59.7c0-3.1.7-5.6 2.2-7.3 1.5-1.8 3.4-2.6 6.1-2.6 2.3 0 4.1.8 5.4 2.3 1.3 1.6 2 3.7 2 6.4v23.7h10.3V58.5c0-5.6-1.4-10.1-4.3-13.3zm-253.6-.8c-3.1-2.7-7.4-4-12.8-4-3.4 0-6.6.8-9.5 2.2-2.7 1.4-5.3 3.6-7 6.6l.1.1 6.6 6.3c2.7-4.3 5.7-5.8 9.7-5.8 2.2 0 3.9.6 5.3 1.7s2 2.6 2 4.4v2c-2.6-.8-5.1-1.2-7.6-1.2-5.1 0-9.3 1.2-12.4 3.6s-4.7 5.9-4.7 10.2c0 3.8 1.3 7 4 9.3 2.7 2.2 6 3.4 9.9 3.4s7.6-1.6 10.9-4.3v3.4h10.1V55.9c.1-4.9-1.5-8.8-4.6-11.5zm-18.3 22.2c1.2-.8 2.8-1.2 4.9-1.2 2.5 0 5.1.5 7.8 1.5v4c-2.2 2.1-5.2 3.1-8.9 3.1-1.8 0-3.2-.4-4.1-1.2s-1.4-1.7-1.4-3 .5-2.4 1.7-3.2zm78.9 16.5c-16.5 0-30-13.4-30-30s13.4-30 30-30c16.5 0 30 13.4 30 30s-13.5 30-30 30zm0-49.3c-10.7 0-19.4 8.7-19.4 19.4s8.7 19.4 19.4 19.4 19.4-8.7 19.4-19.4-8.7-19.4-19.4-19.4z"></path>
                </g>

                <path d="M204.3 23.4c-1.8 0-3.3.6-4.5 1.8s-1.9 2.7-1.9 4.4c0 1.8.6 3.3 1.9 4.5 1.2 1.2 2.7 1.9 4.5 1.9s3.3-.6 4.5-1.9c1.2-1.2 1.9-2.8 1.9-4.5 0-1.8-.6-3.3-1.9-4.4-1.2-1.2-2.8-1.8-4.5-1.8z"></path>
              </svg>
            </div>

            <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <svg
                width="182"
                height="32"
                viewBox="0 0 182 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.28 23.54h11.47l-1.47-3.5H6.81l1.47 3.5zm36.77-1.4l-1.26-.1 1.2-.42c1.83-.65 2.82-1.53 2.82-4.35 0-4.95-4.55-5.34-5.94-5.34H23.62v19.89h18.57c4.79-.05 6.66-1.54 6.66-5.33 0-4.01-3.64-4.33-3.8-4.35zm-4.68 5.7H29.15V15.93h10.49c.29 0 2.83.06 2.83 2.14 0 1.16-.76 1.89-2.03 1.98H30.42l1.48 3.5h8.47c1.05 0 2.82.44 2.82 2.06 0 1.63-1.52 2.23-2.82 2.23zM0 15.67V28.2c0 1.1.44 3.64 4.47 3.64H21.4v-4H5.55v-11.9H21.4v-3.99H4.16c-1.93 0-4.16.42-4.16 3.73zm93.38-.77c-1.56-2.97-3.23-2.97-4.7-2.97H83.4l-8.02 14.23c-2.3-4.26-5.1-9.5-6-11.25-1.56-2.97-3.23-2.97-4.7-2.97h-5.3l-11.2 19.88h6.28l9.2-16.21 4.68 8.59h-8.28l1.68 3.8h8.65l1.8 3.82h6.28l9.2-16.21 4.68 8.59h-8.28l1.68 3.8h8.65l1.81 3.82h6.24c-1.25-2.3-7.62-14.12-9.07-16.92zM93.35 0c1.44 2.64 15.06 27.64 15.84 29.43.82 1.9 1.83 2.57 3.07 2.57h42.13c-8.46-1.04-14.48-6.84-19.23-10.84l-3.05-2.69c-6.5-5.69-15.09-15.92-16.21-16.86a8.1 8.1 0 00-2.88-1.59L93.35 0zm37.97 11.66h-.09c2.32 2.43 4.76 4.89 6.98 6.83l3.05 2.68c4.43 3.73 12.61 9.9 20.4 10.73.82.05 7.22.09 8.12.09H182s-1.92-.2-5.85-1.95h-.05a94.1 94.1 0 01-13.46-7.12l-.03-.03c-.81-.53-1.6-1.1-2.33-1.71l-.62-.55c-3.29-2.66-6.88-6-7.78-6.72-1.19-.92-2.59-2.24-6.4-2.24l-14.16-.01z"
                  fill="#646771"
                  fill-rule="nonzero"
                />
              </svg>
            </div>

            <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
              <svg
                width="112"
                height="39"
                viewBox="0 0 112 39"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0v39h57.57C61.64 26 65.85 13.03 69.96.03 46.63 0 23.3.03 0 0zm21.94 28.02l.4-.71c-.8-2.06-1.77-4.07-2.57-6.14-2.19-.03-4.37 0-6.55 0l-2.49 5.85c-.17.35.1.68.2 1-.68-.02-1.36 0-2.03 0 .4-.32.71-.73.92-1.2 2.04-4.75 4.11-9.5 6.15-14.24.32-.59-.17-1.14-.46-1.61l.61-.87c2.45 5.98 4.95 11.94 7.38 17.93h-1.56v-.01zm2.24 0c-2.55-6.04-5.02-12.08-7.57-18.12-.27-.47.23-.89.41-1.3 2.52 6.05 5 12.09 7.52 18.1.26.52.64.98 1.1 1.33-.49 0-.97-.04-1.45 0l-.01-.01zm4.52 0c-.48 0-.96.03-1.43 0 .6-.38.58-1.2.65-1.8V11.67c0-.76-.07-1.54-.63-2.11h1.4v18.45zm11.16 0c-1.77-.9-3.39-2.08-4.79-3.48a31.34 31.34 0 01-3.42-4.56h-1.46v6.75c0 .49.3.89.48 1.32H29.4V9.6c1.41.03 2.85-.32 4.24 0a5.87 5.87 0 013.37 2.59c.86 1.5.86 3.33 0 4.83a6.09 6.09 0 01-2.94 2.56c1.3 1.96 2.75 3.8 4.35 5.53a10.72 10.72 0 004.34 3.13c-.95.08-2.03.3-2.91-.24v.03zm17.91-.44c-2.8.78-5.87 1.14-8.68.19a9.36 9.36 0 01-4.99-13.94c1.65-2.4 4.23-4 7.13-4.43 2.09-.31 4.22-.16 6.25.44a4.4 4.4 0 001.74.2c.16.66.26 1.33.32 2-1.8-1.7-4.48-2.23-6.88-1.93a9.12 9.12 0 00-6.33 3.74 8.82 8.82 0 003 12.5 9.36 9.36 0 007.66.6c.04-2.03 0-4.07 0-6.1a2.46 2.46 0 00-.58-1.8l1.4-.03c-.02 2.84-.02 5.69-.02 8.54l-.02.02zm1.46-.29l-.78.12c.03-2.77 0-5.56 0-8.34h1.4c-.28.4-.63.8-.63 1.3 0 2.27.04 4.58 0 6.89l.01.03zM35.35 15.3c.31-1.9-.78-4-2.62-4.69-.82-.35-1.7-.26-2.55-.29v8.86c.73.04 1.47-.04 2.17-.25a4.6 4.6 0 003-3.63zm9.02.98c.4-1.7 1.55-3.1 2.66-4.4a8.52 8.52 0 00.3 14.13c-1.76-1.66-3.08-3.9-3.2-6.34-.02-1.15-.1-2.3.24-3.39zm-11.1 3.56l-.78.03c.85 1.09 1.63 2.22 2.52 3.28 1.18 1.52 2.77 2.66 4.28 3.84a36.62 36.62 0 01-6.03-7.15zm1.19-1.24c1.4-.85 2.47-2.38 2.4-4.03.05-1.64-1.09-3.09-2.52-3.8.95.79 1.59 1.88 1.8 3.09a5.45 5.45 0 01-1.68 4.74zm-15.07 1.79c-.89-2.42-1.93-4.8-2.82-7.23-1.02 2.42-2.03 4.84-3.05 7.23h5.89-.02zM73.62 0c-.26 1-.62 1.96-.9 2.95C68.87 14.97 65.13 26.98 61.25 39H112V0a13064 13064 0 01-38.38 0zm13.72 28h-.77V25.6a11 11 0 01-3.22 2.14 8.49 8.49 0 01-6.64-.26 7.08 7.08 0 01-3.58-4.94c-.23-1.11-.14-2.25-.15-3.37 0-2.66.02-5.32 0-7.97a1.86 1.86 0 00-.67-1.64h1.5v11.3c.04 1.7.4 3.52 1.62 4.8a7.3 7.3 0 004.6 2.06 7.4 7.4 0 01-3.84-2.09 7.16 7.16 0 01-1.72-4.53V9.56h1.39c-.37.37-.58.87-.58 1.38V21.1c.06 1.42.4 2.94 1.42 4.02a6.3 6.3 0 005.7 1.95 9.03 9.03 0 004.16-2.42c.03-4.48 0-8.96 0-13.44.02-.6-.2-1.18-.62-1.61h1.4c0 6.1.03 12.26 0 18.4zm1.48-1.58a3 3 0 00.5 1.57h-1.27c-.04-6.15 0-12.3 0-18.45h1.34a2.47 2.47 0 00-.55 1.61v15.27h-.02zm11.61.84c-1.46 1-3.3 1.3-5.01.8-1.1-.2-2.07-1.02-3.23-.8V24.9c1.06 1.7 3.09 2.91 5.16 2.56 1.34-.19 2.23-1.44 2.44-2.68a3.68 3.68 0 00-1.04-3.1c-1.46-1.47-2.94-2.9-4.4-4.35a6 6 0 01-1.8-3 4.3 4.3 0 01.49-2.79c1-1.5 2.74-2.37 4.56-2.27 1.12 0 2.2.55 3.32.23 0 .67 0 1.34-.07 2.01-.44-.43-.82-.94-1.44-1.15-1-.35-2.17-.5-3.14 0-.8.48-1.35 1.3-1.49 2.21-.12 1.11.3 2.2 1.14 2.96 1.56 1.5 3.05 3.1 4.57 4.66a5 5 0 011.57 3.58 4.12 4.12 0 01-1.63 3.5zM71.06 0c-4.1 13-8.3 25.98-12.4 38.98h1.5L72.54 0h-1.47zm24.83 16.76a6.6 6.6 0 01-1.51-1.86 4.2 4.2 0 01.1-3.79 3.08 3.08 0 00-.75 3.93c.52.98 1.37 1.71 2.12 2.5s1.63 1.61 2.44 2.47c.81.85 1.75 1.6 2.13 2.72.45 1.25.14 2.6-.33 3.78.81-.85 1.41-2.01 1.22-3.22a4.49 4.49 0 00-1.05-2.07c-1.43-1.54-2.93-2.95-4.37-4.45v-.01z"
                  fill="#646771"
                  fill-rule="nonzero"
                />
              </svg>
            </div>

            <div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <svg
                width="156"
                height="28"
                viewBox="0 0 156 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.917 5.7c5.455-5 15.95-7.606 25.253-4.068-7.848-.621-21.7 2.9-25.253 4.068zM2.334 7.382C6.972 6.048 26.761.646 33.505 3.873a17.928 17.928 0 013.431 3.045C27.121 2.697 2.473 9.59.65 10.46c.491-1.085 1.105-2.605 1.685-3.074v-.004zM.191 12.134c6.65-2.357 30.19-8.26 38.221-3.02.443 1.06.812 2.149 1.105 3.26-7.19-7.134-35.616.63-39.497 2.54-.053-.935 0-1.873.155-2.796l.016.016zM.048 15.35c4.47 1.073 34.565 2.56 39.62-.916a15.211 15.211 0 01-.613 3.104c-4.871 3.417-35.461 1.553-38.16.745a17.927 17.927 0 01-.818-2.9l-.029-.033zm1.665 4.437c3.954.593 33.317 2.072 36.659-.712a14.385 14.385 0 01-3.158 3.848c-4.723 1.305-29.792.622-31.109-.31-.458-.415-1.84-1.832-2.388-2.826h-.004zm4.44 4.458c5.395.866 22.314 1.18 26.82.31-6.085 4.317-19.327 4.972-26.82-.31zM49.877 5.232h3.55l15.707 13.535V5.232h3.219v17.4h-3.076L53.094 8.654V22.65h-3.218V5.232zm28.344 0h14.567c4.045 0 6.74 1.152 6.74 4.458 0 2.204-1.063 3.016-1.987 3.617a4.658 4.658 0 012.65 4.283c0 3.286-2.577 5.055-6.765 5.055H78.22V5.232zM93 12.11c2.2 0 3.17-.55 3.17-2.013 0-1.463-.97-2.038-3.17-2.038H81.578v4.047L93 12.11zm.094 7.714c2.127 0 3.738-.414 3.738-2.485 0-1.823-1.468-2.395-3.738-2.395H81.578v4.889l11.516-.009zm34.647-10.436c0-3.28-2.777-4.428-6.81-4.428h-8.918c-4.033 0-6.76 1.147-6.777 4.428v13.158h3.133v-6.699h16.256v6.703h3.132V9.387h-.016zm-19.385 3.63V9.702c.066-1.396 1.301-1.922 3.44-1.922h9.45c2.201 0 3.35.551 3.35 2.034v3.194l-16.24.009zm47.624-3.63c0-3.28-2.777-4.428-6.81-4.428h-8.919c-4.032 0-6.76 1.147-6.776 4.428v13.158h3.136v-6.699h16.256v6.703H156V9.387h-.02zm-19.369 3.63V9.702c.066-1.396 1.3-1.922 3.44-1.922h9.467c2.2 0 3.345.551 3.345 2.034v3.194l-16.252.009z"
                  fill="#646771"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FleetPage;
