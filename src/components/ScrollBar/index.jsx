import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../utils';
import { astronaut } from '../../assets';

import './styles.css';

const ScrollBar = () => {
  const [text, setText] = useState('Welcome');
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
    <div className="hidden md:block relative hero-container md:col-span-4 lg:col-span-4 col-span-12 px-3 text-right" id='scrollBar'>
      <div className="container flex flex-col gap-5 sticky top-9">
      <div className="z-10 text-right flex flex-col gap-5">
        <h1 className="font-black md:text-4xl lg:text-5xl xl:text-6xl" style={{ color: `hsl(${hue}, 100%, 68%)` }}>
          {capitalizeFirstLetter(text)}
        </h1>
      </div>


        <div className='flex flex-row gap-10 h-52 self-end'>
          <ul className='h-100 flex flex-col justify-between text-right' id='menu-index'>
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
            <li id='hero-option' style={{color: 'hsl(262, 100%, 68%)'}}>Welcome! -</li>

            <li id='projects-option' className='text-gray-800'>Projects -</li>

            <li id='experience-option' className='text-gray-800'>Experience -</li>

            <li className='font-bold text-gray-800' id='about-option'>About -</li>

            <li id='contact-option' className='text-gray-800'>Contact -</li>
          </ul>

          <div className="flex flex-col justify-center items-center" id='ball-container'>
          <div className="w-5 h-5 rounded-full" id='ball' style={{ backgroundColor: `hsl(${hue}, 100%, 68%)` }} />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
        </div>
        <img src={astronaut} alt="astronaut" className="astronaut" />
      </div>
      
    </div>
  );
};

export default ScrollBar
