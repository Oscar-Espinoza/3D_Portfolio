import { BrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const ScrollBar = lazy(() => import("./components/ScrollBar"));
const Navbar = lazy(() => import("./components/Navbar"));
const StarsCanvas = lazy(() => import("./components/Canvas/Stars"));

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sectionWrappers = document.querySelectorAll(".sectionWrapper");

      let visibleElements = [];
      let maxVisibleHeight = 0;
      let maxVisibleElement = null;

      sectionWrappers.forEach((section) => {
        const { top, bottom, height } = section.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          visibleElements.push(section);

          const visibleHeight =
            Math.min(bottom, window.innerHeight) - Math.max(top, 0);
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            maxVisibleElement = section;
          }
        }
      });

      visibleElements.forEach((element) => {
        if (element === maxVisibleElement) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div
        className="relative z-0 bg-primary grid grid-cols-1 md:grid-cols-12 xs:px-4 gap-8 py-8"
        id="content-container"
      >
        <div className="col-span-12 md:col-span-8 flex flex-col gap-20 px-3">
          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
            <Experience />
            <About />
            <div className="relative z-0">
              <Contact />
            </div>
          </Suspense>
        </div>
        <ScrollBar />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
