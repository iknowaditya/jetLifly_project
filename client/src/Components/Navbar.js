import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../Constants";
import call from "../Assets/call.svg";
import logo from "../Assets/cmlogo.png";
import Hamburger from "hamburger-react";

function A__Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <motion.nav
      className="absolute py-8 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between max-w-screen-lg mx-auto px-6 lg:px-20 3xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/">
            <img src={logo} alt="logo" width={90} height={35} />
          </Link>
        </motion.div>

        <ul className="hidden h-full gap-12 lg:flex  ">
          {NAV_LINKS.map((link, index) => (
            <motion.a
              href={link.href}
              key={link.key}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="text-[16px] font-[400] text-white hover:text-gray-100 flex items-center justify-center cursor-pointer pb-1.5 relative"
              onMouseEnter={() => setActiveLink(link.href)}
              onMouseLeave={() => setActiveLink(location.pathname)}
            >
              <Link to={link.href}>{link.label}</Link>
              {activeLink === link.href && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-teal-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </motion.a>
          ))}
          <div className="flex items-center gap-2 justify-center">
            <img src={call} alt="logo" width={25} height={25} />
            <h1 className="text-white">+1 -(401) 405-4653</h1>
          </div>

          <div className="flex lg:items-center lg:justify-center ">
            <Link to="/booknow">
              <button
                type="button"
                className="py-2.5 px-6 mr-2 mb-2 text-base font-medium focus:outline-none rounded-lg focus:z-10 focus:ring-1 bg-teal-600 text-gray-200 hover:text-white hover:bg-teal-700 duration-500"
              >
                Book Now
              </button>
            </Link>
          </div>
        </ul>

        {/* hamburgur navlinks with icon */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <Hamburger
            toggled={toggle}
            toggle={setToggle}
            color="#fff"
            size={28}
            duration={0.5}
          />

          {toggle && (
            <div className=" pt-2 pb-2 space-y-1 ">
              <ul className="flex flex-col justify-end items-center bg-neutral-950 bg-gradient-to-tl from-teal-950 absolute left-4 right-4 top-20 rounded-2xl py-12">
                {NAV_LINKS.map((nav, index) => (
                  <motion.li
                    key={nav.id}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      index === NAV_LINKS.length - 1 ? "mb-0" : "mb-4"
                    } text-neutral-400 hover:border hover:border-teal-500 hover:text-white block px-3 py-4 rounded-md text-base font-medium `}
                  >
                    <Link
                      to={nav.href}
                      onClick={() => {
                        setToggle(false);
                        setActiveLink(nav.href);
                      }}
                    >
                      {nav.label}
                    </Link>
                  </motion.li>
                ))}
                <div className="flex lg:items-center lg:justify-center mt-[2rem]">
                  <Link to="/booknow">
                    <button
                      type="button"
                      className="py-2.5 px-6 mr-2 mb-2 text-base font-medium focus:outline-none rounded-lg focus:z-10 focus:ring-1 bg-teal-600 text-gray-200 hover:text-white hover:bg-teal-700 duration-500"
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

export default A__Navbar;
