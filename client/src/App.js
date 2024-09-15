import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./routes/Home"));
const Book = lazy(() => import("./routes/BookNow"));
const ContactUs = lazy(() => import("./routes/ContactUs"));
const Fleet = lazy(() => import("./routes/Fleet"));
const ExperienceJet = lazy(() => import("./routes/ExperienceJet"));
const Why = lazy(() => import("./routes/Why"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>JetLyfly is Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booknow" element={<Book />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/experience" element={<ExperienceJet />} />
          <Route path="/whyus" element={<Why />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
