import React, { useEffect } from 'react';
import { styles } from "../../styles";

const Hero = () => {
  useEffect(() => {
    const ballContainer = document.getElementById('ball-container');
    const ball = document.getElementById('ball');
  
    const handleScroll = () => {
      const contentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / contentHeight) * 100;
      const maxTranslateY = ballContainer.offsetHeight - ball.offsetHeight;
      const translateY = (maxTranslateY * scrollPercentage) / 100;
      ball.style.transform = `translateY(${translateY}px)`;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <div className="container flex flex-row items-start gap-5 sticky top-10 left-0">
        <div className="flex flex-col justify-center items-center" id='ball-container'>
          <div className="w-5 h-5 rounded-full bg-[#915eff]" id='ball'/>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className={`${styles.heroHeadText} z-10`}>
          <h1>
            Hi, I'm <span className="text-[#915eff]">Oscar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-stack web and
            <br className="sm:block hidden" /> mobile software developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero