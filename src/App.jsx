import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      {loading && <Loader />}
      <div className={dark ? "dark" : ""}>
        <div className="bg-[#FFF8F0] dark:bg-[#1E1E1E] text-[#1B1B1B] dark:text-[#F4E1C1] transition-colors duration-300 overflow-x-hidden">
          <Navbar dark={dark} setDark={setDark} />
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <WhyUs />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
