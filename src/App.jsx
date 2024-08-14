import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Programs/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/Videoplayer/videoplayer";

const App = () => {
  const [playstate, setPlaystate] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our PROGRAM" title="What We Offer" />
        <Program />
        <About setPlaystate={setPlaystate} />
        <Title subtitle="Gallery" title="Campus photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS " title="what student says" />
        <Testimonial />
        <Title subtitle="Contact us " title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playstate={playstate} setPlaystate={setPlaystate} />
    </>
  );
};

export default App;
