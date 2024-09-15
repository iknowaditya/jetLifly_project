import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Second from "../Components/Second";
import Third from "../Components/Third";

// import Featured from "../Components/Featured";
import ImageCard from "../Components/ImageCard";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Faq from "../Components/Faq";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Third />
      <Second />
      <ImageCard />
      {/* <Featured /> */}
      <Testimonial />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
