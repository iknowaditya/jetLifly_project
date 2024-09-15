import React from "react";
import bg from "../Assets/bg.jpg";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function ContactUs() {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <img
            src={bg}
            alt="contact"
            className="w-full h-[600px] object-cover xl:h-[900px] 2xl:h-[1200px] items-center "
          />
        </div>

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
