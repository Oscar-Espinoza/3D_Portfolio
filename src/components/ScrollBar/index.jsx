import React, { Suspense, useEffect, useState } from "react";
import { astronaut } from "../../assets";
import { handleLinkClick } from "../../utils";
import { navLinks } from "../../constants";
import { github, linkedin } from "../../assets";

import "./styles.css";

const ScrollBar = ({ currentSection, navRef, setToggle }) => {
  const [hue, setHue] = useState(259);
  const color = `hsl(${hue}, 100%, 68%)`;

  useEffect(() => {
    const ballContainer = document.getElementById("ball-container");
    const ball = document.getElementById("ball");

    const handleScroll = () => {
      const contentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / contentHeight) * 100;
      const maxTranslateY = ballContainer.offsetHeight - ball.offsetHeight;
      const translateY = (maxTranslateY * scrollPercentage) / 100;
      ball.style.transform = `translateY(${translateY}px)`;

      let newHue = 262 + (scrollPercentage / 100) * 98;

      if (newHue > 360) {
        newHue -= 360;
      }

      setHue(newHue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hue]);

  return (
    <div className="flex flex-col items-center p-5 md:p-0 justify-evenly md:items-end sticky md:top-9 sidebar-container">
      <div
        className="flex gap-10 w-max rounded-xl py-2 px-5 h-fit"
        style={{ background: `hsla(${hue}, 100%, 68%, 0.15)` }}
      >
        <a href="https://github.com/Oscar-Espinoza" target="_blank">
          <img
            src={github}
            alt="github"
            className="w-10 h-10 rounded-full scale"
          />
        </a>
        <a href="https://www.linkedin.com/in/oscar-d-espinoza/" target="_blank">
          <img
            src={linkedin}
            alt="linkedin"
            className="w-10 h-10 rounded-full scale"
          />
        </a>
      </div>

      <div className="flex justify-end gap-5 h-fit lg:h-64 xl:h-80 md:self-end md:w-full">
        <ul
          className="h-100 flex flex-col justify-between text-right"
          id="menu-index"
        >
          <style>
            {`
                #menu-index li:hover {
                  font-size: 25px !important;
                  color: var(--hover-color) !important;
                  cursor: pointer;
                }
                #menu-index {
                  --hover-color: ${color};
                }
              `}
          </style>
          {navLinks.map((section) => (
            <li
              key={section.id}
              id={`${section.id}-option`}
              style={{
                color: `${section.id === currentSection ? color : ""}`,
              }}
              onClick={() => {
                handleLinkClick(section.id, navRef);
                setToggle && setToggle((prev) => !prev);
              }}
            >
              {section.title} -
            </li>
          ))}
        </ul>

        <div
          className="flex flex-col justify-center items-center"
          id="ball-container"
        >
          <div
            className="w-5 h-5 rounded-full"
            id="ball"
            style={{ backgroundColor: `hsl(${hue}, 100%, 68%)` }}
          />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <img
          src={astronaut}
          alt="astronaut"
          className="astronaut w-40 h-fit float-right md:w-40 lg:w-52 md:h-auto"
        />
      </Suspense>
    </div>
  );
};

export default ScrollBar;
