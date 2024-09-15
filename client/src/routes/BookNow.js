import React from "react";
import BookInfo from "../Components/BookInfo";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import bookbg from "../Assets/bookbg.jpg";

function BookNow() {
  return (
    <div>
      <Navbar />
      <div>
        <img
          src={bookbg}
          alt="booknow"
          className="w-full h-[30rem] object-cover"
        />
      </div>
      <div className=" mx-5 py-28">
        <BookInfo />
      </div>

      <Footer />
    </div>
  );
}

export default BookNow;
