import { useState, useEffect, useRef } from "react";
import { useDrag } from "react-use-gesture";

import { styles } from "../../styles";
import "./styles.css";

const Hero = () => {
  const titles = ["Full-stack", "Front-end", "Back-end"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [dragged, setDragged] = useState(false);
  const titleRefs = useRef([]);
  const titleContainerRef = useRef();

  useEffect(() => {
    titleRefs.current = titleRefs.current.slice(0, titles.length);
  }, []);

  useEffect(() => {
    const titleContainer = titleContainerRef.current;
    const handleScroll = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      } else {
        setTitleIndex(
          (prevIndex) => (prevIndex - 1 + titles.length) % titles.length
        );
      }
    };
    titleContainer.addEventListener("wheel", handleScroll, { passive: false });
    return () => titleContainer.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [titles.length]);

  useEffect(() => {
    titleRefs.current.forEach((ref, i) => {
      if (i === titleIndex) {
        ref.classList.add("current");
        ref.classList.remove("transparent");
      } else {
        ref.classList.remove("current");
        ref.classList.add("transparent");
      }
    });
  }, [titleIndex]);

  const bind = useDrag(
    ({ movement: [mx, my], direction: [dx, dy], down }) => {
      const movingUp = dy < 0;
      if (down && !dragged && Math.abs(my) > 30) {
        setTitleIndex((prev) =>
          movingUp
            ? (prev + 1) % titles.length
            : (prev - 1 + titles.length) % titles.length
        );
        setDragged(true);
      }
      if (!down) {
        setDragged(false);
      }
    },
    { axis: "y", filterTaps: true }
  );

  return (
    <section
      className="sectionWrapper hero-section flex flex-col justify-center items-center w-full"
      id="welcome"
    >
      <div className="sm:w-9/12 md:w-full">
        <p className={`${styles.sectionSubText} w-fit`}>
          Hi! My name is Oscar Espinoza
        </p>
        <h1 className="font-black text-white xl:text-[50px] lg:text-[40px] md:text-[40px] sm:text-[35px] xs:text-[30px] text-[30px] mt-2 gap-2 main-title">
          Dedicated software developer experienced in{" "}
          <div
            className="titles-container cursor-grab w-52 sm:w-96 inline-block text-wrap"
            ref={titleContainerRef}
            style={{ overscrollBehavior: "contain", touchAction: "none" }}
            {...bind()}
            onTouchMove={(e) => e.preventDefault()}
          >
            {titles.map((title, index) => {
              let className = "title ";
              if (index === titleIndex) {
                className += "current";
              } else if (index === (titleIndex + 1) % titles.length) {
                className += "next";
              } else if (
                index ===
                (titleIndex - 1 + titles.length) % titles.length
              ) {
                className += "previous";
              }
              return (
                <span
                  ref={(el) => (titleRefs.current[index] = el)}
                  className={`${className} inline-block`}
                  key={title}
                >
                  {title}
                </span>
              );
            })}
          </div>
        </h1>
        <p className={`${styles.sectionSubText} w-fit`}></p>
      </div>
    </section>
  );
};

export default Hero;
