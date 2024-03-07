import React, { Suspense, lazy, useState } from "react";
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const ScrollBar = lazy(() => import("./components/ScrollBar"));
const Navbar = lazy(() => import("./components/Navbar"));
const Stars = lazy(() => import("./components/Particles"));

import { useEffect } from "react";

const App = () => {
  const [currentSection, setCurrentSection] = useState("welcome");

  const changeSection = (newSection) => setCurrentSection(newSection);

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
          setCurrentSection(element.id);
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar
          currentSection={currentSection}
          setCurrentSection={changeSection}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Stars />
      </Suspense>
      <div
        className="relative z-10 bg-tertiary bg-opacity-50 grid grid-cols-1 sm:grid-cols-12 px-5 md:px-10 xl:px-20 gap-8 py-8"
        id="content-container"
      >
        <div className="flex flex-col col-span-12 md:col-span-8 lg:col-span-9 gap-20 px-3">
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
        <div
          className="hidden md:block relative hero-container col-span-4 lg:col-span-3 px-3 text-right text-"
          id="scrollBar"
        >
          <ScrollBar
            currentSection={currentSection}
            setCurrentSection={changeSection}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
