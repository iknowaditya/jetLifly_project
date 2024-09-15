import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoInstagram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* <div className="w-[1241px] h-[523px] relative ">
        <div className="w-[400px] h-[523px] left-[841px] top-0 absolute bg-sky-100 rounded-tl-[50px] rounded-bl-[50px]" />
        <img
          className="w-[589px] h-[392.67px] left-[501px] top-[66px] absolute rounded-[20px]"
          src="https://via.placeholder.com/589x393"
          alt=""
        />
        <div className="w-[463px] h-[245px] left-0 top-[140px] absolute">
          <div className="left-0 top-0 absolute text-black text-2xl font-semibold font-['Poppins']">
            Business Jet Charter
          </div>
          <div className="w-[463px] h-[195px] left-0 top-[50px] absolute text-justify text-neutral-900 text-opacity-60 text-base font-normal font-['Poppins'] tracking-tight">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors
          </div>
        </div>
      </div> */}

      <section>
        <div class="relative items-center w-full  px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div class="mx-auto bg-gray-100 p-8 lg:p-10 rounded-3xl">
            <div class="grid items-center grid-cols-1 lg:grid-cols-2">
              <div>
                <p class="lg:text-5xl md:text-4xl text-3xl font-medium tracking-tighter text-black">
                  Subscribe if so
                </p>
              </div>
              <div>
                <form class="flex flex-col items-center max-w-lg" action="">
                  <div class="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                    <input
                      name="email"
                      type="email"
                      class="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                      placeholder="Enter your email..."
                      required=""
                    />
                    <button
                      type="button"
                      class="items-center inline-flex justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      <div style={{ position: "relative" }}></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="w-4 h-auto ml-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>

                <div class="sm:max-w-lg sm:flex">
                  <p class="mt-6 text-xs text-gray-500">
                    By subscribing, you agree with Unwrapped’s
                    <a
                      class="text-blue-600 hover:text-black unerline"
                      target="_blank"
                      href="#_"
                    >
                      Terms of Service
                    </a>
                    and
                    <a
                      class="text-blue-600 hover:text-black"
                      target="_blank"
                      href="#_"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------><------------------ */}

      <footer class="flex flex-col space-y-10 justify-center bg-neutral-900">
        <nav class="flex justify-center flex-wrap gap-6 text-neutral-300 font-medium mt-6 py-6">
          <a class="hover:text-neutral-500 " href="/">
            Fleet
          </a>
          <a class="hover:text-neutral-500" href="/">
            Experience
          </a>
          <a class="hover:text-neutral-500" href="/">
            Why Jetlifly
          </a>
          <a class="hover:text-neutral-500" href="/">
            Contact Us
          </a>
        </nav>

        <div class="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrFacebookOption className="text-neutral-400 text-4xl hover:text-neutral-500 " />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXFill className="text-neutral-400 text-3xl mt-1 hover:text-neutral-500 " />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="text-neutral-400 text-4xl hover:text-neutral-500 " />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagram className="text-neutral-400 text-4xl hover:text-neutral-500 " />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-neutral-400 text-4xl hover:text-neutral-500 " />
          </a>
        </div>
        <p class="text-center text-gray-600 font-medium ">
          &copy; 2023 JetliFly Ltd. All rights reservered.
        </p>
      </footer>
    </>
  );
}

export default Footer;
