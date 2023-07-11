import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../utils';
import { astronaut } from '../../assets';

import './styles.css';

const Hero = () => {
  const [text, setText] = useState('About');
  const [hue, setHue] = useState(259);
  const color = `hsl(${hue}, 100%, 68%)`;
  
  useEffect(() => {
    const ballContainer = document.getElementById('ball-container');
    const ball = document.getElementById('ball');
  
    const handleScroll = () => {
      const contentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / contentHeight) * 100;
      const maxTranslateY = ballContainer.offsetHeight - ball.offsetHeight;
      const translateY = (maxTranslateY * scrollPercentage) / 100;
      ball.style.transform = `translateY(${translateY}px)`;

      let newHue = 262 + ((scrollPercentage / 100) * 98); // 98 is the distance from 262 to 360

      if (newHue > 360) {
        newHue -= 360;
      }

      setHue(newHue);

      // Get all sectionWrappers
      const sectionWrappers = document.getElementsByClassName('sectionWrapper');

      // Iterate through each sectionWrapper and check if it has class 'visible'
      for (let i = 0; i < sectionWrappers.length; i++) {
        if (sectionWrappers[i].classList.contains('visible')) {
          setText(sectionWrappers[i].id);
        
          // Remove highlight from all options
          document.querySelectorAll("#menu-index li").forEach(li => {
            li.style.color = "rgb(31 41 55)";
            li.classList.remove('active')
          });
        
          // Highlight current option
          const option = document.getElementById(`${sectionWrappers[i].id}-option`);
          if (option) {
            option.style.color = color;
            option.classList.add('active')
          }
          break;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hue]);

  return (
    <div className="relative hero-container md:col-span-4 lg:col-span-3 col-span-12" id='hero'>
      <div className="container flex flex-col items-start gap-5 sticky md:top-20">
        <div className='z-10'>
          <h1 className="font-black md:text-[30px] lg:text-[50px]" style={{ color: `hsl(${hue}, 100%, 68%)` }}>
            {capitalizeFirstLetter(text)}
          </h1>
          <p className={`text-[#dfd9ff] hidden lg:block font-medium lg:text-[20px] mt-2 w-11/12`}>
            Full-stack web and mobile software developer
          </p>
        </div>

        <div className='flex flex-row w-full gap-10 h-52'>
          <div className="flex flex-col justify-center items-center" id='ball-container'>
          <div className="w-5 h-5 rounded-full" id='ball' style={{ backgroundColor: `hsl(${hue}, 100%, 68%)` }} />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <ul className='h-100 flex flex-col justify-between py-1' id='menu-index'>
            <style>
              {`
                #menu-index li:hover {
                  font-size: 20px;
                  color: var(--hover-color) !important;
                  cursor: pointer;
                }
                #menu-index {
                  --hover-color: ${color};
                }
              `}
            </style>
            <li className='font-bold' style={{color: 'hsl(262, 100%, 68%)'}} id='about-option'>- About</li>
            <li id='projects-option' className='text-gray-800'>- Projects</li>
            <li id='experience-option' className='text-gray-800'>- Experience</li>
            <li id='contact-option' className='text-gray-800'>- Contact</li>
          </ul>
        </div>
        <div className="container">
          <img src={astronaut} alt="astronaut" className="astronaut max-w-full" />
        </div>
      </div>
      
    </div>
  );
};

export default Hero
