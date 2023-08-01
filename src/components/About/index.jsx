import React, { useState, useEffect, useRef } from "react";
import { styles } from "../../styles";
import { services } from "../../constants";
import { BiRightArrow } from "react-icons/bi";
import "./styles.css";

const TechCard = ({ tech }) => {
  return (
    <div className="flex flex-col gap-2 max-w-max">
      <img
        className="tech w-20 sm:w-24 md:w-32 xl:w-36"
        src={tech.icon}
        alt={`${tech.icon}`}
      />
      <p className="text-center text-ellipsis overflow-hidden text-xs sm:text-base">
        {tech.name}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section
      className="relative z-0 sectionWrapper w-full flex flex-col gap-5 sm:gap-10"
      id="Tech Stack"
    >
      <div>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-16 justify-items-stretch bg-tertiary bg-opacity-30 p-3 rounded-lg">
        {services.map((service) =>
          service.technologies.map((tech) => (
            <TechCard tech={tech} key={tech.name} />
          ))
        )}
      </div>
    </section>
  );
};

export default About;
