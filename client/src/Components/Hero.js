import React from "react";
import { motion } from "framer-motion";
import airbg from "../Assets/airbg.jpg";

function Hero() {
  return (
    <section
      className="flex flex-col w-full h-[800px] xl:h-[900px] 2xl:h-[1200px] items-center "
      style={{
        backgroundImage: `url(${airbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col items-center justify-center text-neutral-300 text-center ">
        <div className=" pt-[26rem] sm:pt-[28rem] xs:pt-[26rem] lg:pt-[29rem] xl:pt-[32rem] 2xl:[65rem] ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl text-center text-white font-black leading-10"
          >
            Elevate Your Expectations
            <br /> <span className="text-teal-400">Elevate</span> Your Journey.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-3 text-gray-300 font-normal text-center text-base lg:text-xl"
          >
            Where Every Path Leads to a New Discovery.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
