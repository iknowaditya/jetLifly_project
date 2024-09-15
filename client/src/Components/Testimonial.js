import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import avt1 from "../Assets/avt1.jpg";
import avt2 from "../Assets/avt2.jpg";
import avt3 from "../Assets/avt3.jpg";
import avt4 from "../Assets/avt4.jpg";
import avt5 from "../Assets/avt5.jpg";
import avt6 from "../Assets/avt6.jpg";

function Testimonial() {
  const testimonialVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [ref, inView] = useInView({ triggerOnce: true }); // Initialize useInView

  useEffect(() => {
    if (inView) {
      // When the section comes into view, start animations
      // You can trigger the animation here
    }
  }, [inView]);

  return (
    <div class="text-gray-600  mt-20 " id="reviews" ref={ref}>
      <div class="max-w-7xl mx-auto px-6 py-24 md:px-12 xl:px-6">
        <div class="mb-16 space-y-4 px-6 md:px-0">
          <h2 class="text-center font-bitter_heading text-3xl font-bold text-gray-800  md:text-5xl tracking-tighter  leading-relaxed">
            We <span className="text-teal-500">have</span> some fans.
          </h2>
        </div>

        <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <motion.div
            variants={testimonialVariants}
            whileHover="hover"
            initial="initial"
            animate={inView ? "animate" : "initial"} // Set the animate conditionally
            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
          >
            <div class="flex gap-4">
              <img
                class="w-12 h-12 rounded-full object-cover"
                src={avt1}
                alt="user avatar"
                width="400"
                height="400"
                loading="eager"
              />
              <div>
                <h6 class="text-lg font-medium text-gray-700 ">Daniella Doe</h6>
                <p class="text-sm text-gray-500 ">United States</p>
              </div>
            </div>
            <p class="mt-8 text-base font-jost font-normal tracking-normal text-justify   leading-relaxed text-gray-700">
              JetLifly exceeded my expectations! From seamless booking to
              impeccable service, every detail was handled with precision. The
              luxurious experience and professional staff made my journey
              unforgettable. I highly recommend JetLifly to anyone seeking
              top-tier jet services. They truly set the standard for excellence
              in private jet travel.
            </p>
          </motion.div>

          <motion.div
            variants={testimonialVariants}
            whileHover="hover"
            initial="initial"
            animate={inView ? "animate" : "initial"} // Set the animate conditionally
            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
          >
            <div class="flex gap-4">
              <img
                class="w-12 h-12 rounded-full object-cover"
                src={avt2}
                alt="user avatar"
                width="200"
                height="200"
                loading="eager"
              />
              <div>
                <h6 class="text-lg font-medium text-gray-700 ">Jane doe</h6>
                <p class="text-sm text-gray-500 ">Canada</p>
              </div>
            </div>
            <p class="mt-8 text-base tracking-tighter text-justify leading-relaxed text-gray-700">
              {" "}
              Its just sets a new standard in luxury travel. Impeccable service,
              seamless booking, and a truly memorable experience. Their
              attention to detail and professionalism make them my top choice
              for private jet travel.
            </p>
          </motion.div>

          <motion.div
            variants={testimonialVariants}
            whileHover="hover"
            initial="initial"
            animate={inView ? "animate" : "initial"} // Set the animate conditionally
            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
          >
            <div class="flex gap-4">
              <img
                class="w-12 h-12 rounded-full object-cover"
                src={avt3}
                alt="user avatar"
                width="200"
                height="200"
                loading="eager"
              />
              <div>
                <h6 class="text-lg font-medium text-gray-700 ">Yanick Doe</h6>
                <p class="text-sm text-gray-500 ">United States</p>
              </div>
            </div>
            <p class="mt-8 text-base font-jost font-normal tracking-normal text-justify   leading-relaxed text-gray-700">
              An extraordinary experience from start to finish. Impeccable
              service, seamless booking, and attention to detail. JetLifly sets
              the bar high for private jet travel. Highly recommended for a
              truly luxurious journey.
            </p>
          </motion.div>

          <motion.div
            variants={testimonialVariants}
            whileHover="hover"
            initial="initial"
            animate={inView ? "animate" : "initial"} // Set the animate conditionally
            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
          >
            <div class="flex gap-4">
              <img
                class="w-12 h-12 rounded-full object-cover"
                src={avt4}
                alt="user avatar"
                width="200"
                height="200"
                loading="eager"
              />
              <div>
                <h6 class="text-lg font-medium text-gray-700 ">Jane Doe</h6>
                <p class="text-sm text-gray-500 ">United States</p>
              </div>
            </div>
            <p class="mt-8 text-base font-jost font-normal tracking-normal text-justify   leading-relaxed text-gray-700">
              Exemplary service and attention to detail. JetLifly ensures a
              seamless and luxurious journey. From booking to arrival, every
              aspect was handled with precision. Highly recommended for a
              top-tier travel experience.
            </p>
          </motion.div>

          <motion.div
            variants={testimonialVariants}
            whileHover="hover"
            initial="initial"
            animate={inView ? "animate" : "initial"} // Set the animate conditionally
            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
          >
            <div class="flex gap-4">
              <img
                class="w-12 h-12 rounded-full object-cover"
                src={avt5}
                alt="user avatar"
                width="200"
                height="200"
                loading="eager"
              />
              <div>
                <h6 class="text-lg font-medium text-gray-700 ">Mark Wood</h6>
                <p class="text-sm text-gray-500 ">United States</p>
              </div>
            </div>
            <p class="mt-8 text-base font-jost font-normal tracking-normal text-justify   leading-relaxed text-gray-700">
              {" "}
              JetLifly's service is unmatched. Their team goes above and beyond
              to ensure a seamless and comfortable journey. The level of
              professionalism and efficiency is truly impressive. I confidently
              recommend JetLifly for all private jet needs
            </p>
          </motion.div>

          <motion.div
            variants={testimonialVariants}
            whileHover="hover"
            initial="initial"
            animate={inView ? "animate" : "initial"} // Set the animate conditionally
            className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
          >
            <div class="flex gap-4">
              <img
                class="w-12 h-12 rounded-full object-cover"
                src={avt6}
                alt="user avatar"
                width="400"
                height="400"
                loading="eager"
              />
              <div>
                <h6 class="text-lg font-medium text-gray-700 ">Yanndy Doe</h6>
                <p class="text-sm text-gray-500 ">Canada</p>
              </div>
            </div>
            <p class="mt-8 text-base font-jost font-normal tracking-normal text-justify   leading-relaxed text-gray-700">
              JetLifly sets the gold standard in private jet travel. From
              booking to landing, their team ensures an impeccable experience.
              The attention to detail and commitment to safety are truly
              commendable. JetLifly is simply the best in the business.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
