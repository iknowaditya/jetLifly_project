import React from "react";
import Whyus from "../Components/Whyus";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Why() {
  return (
    <div>
      <div>
        <Navbar />
        <img
          src={
            "https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="contact"
          className="w-full h-[600px] object-cover xl:h-[900px] 2xl:h-[1200px] items-center "
        />
      </div>

      <Whyus />
      <Footer />
    </div>
  );
}

export default Why;
