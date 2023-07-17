import { useState, useEffect, useRef } from 'react';
import { useDrag } from 'react-use-gesture'

import { styles } from "../../styles";
import './styles.css';


const titles = ['Front-end', 'Back-end', 'Mobile', 'Freelancer'];

const Hero = () => {
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
        setTitleIndex((prevIndex) => (prevIndex - 1 + titles.length) % titles.length);
      }
    };
    titleContainer.addEventListener('wheel', handleScroll, {passive: false});
    return () => titleContainer.removeEventListener('wheel', handleScroll);
  }, []);

  useEffect(() => {
    titleRefs.current.forEach((ref, i) => {
      if (i === titleIndex) {
        ref.classList.add('current');
        ref.classList.remove('transparent');
      } else {
        ref.classList.remove('current');
        ref.classList.add('transparent');
      }
    });
  }, [titleIndex]);

  const bind = useDrag(({ movement: [mx, my], direction: [dx, dy], down }) => {
    const movingUp = dy < 0;
    if (down && !dragged && Math.abs(my) > 30) { 
      setTitleIndex((prev) => movingUp ? (prev + 1) % titles.length : (prev - 1 + titles.length) % titles.length);
      setDragged(true);
    }
    if (!down) {
      setDragged(false);
    }
  }, { axis: 'y', filterTaps: true });  

  return (
    <section className="sectionWrapper hero-section flex flex-col justify-center items-center" id='hero'>
      <div>
      <p className={`${styles.sectionSubText} w-fit`}>Hi! My name is Oscar Espinoza</p>
      <h1 className={`${styles.heroHeadText} w-fit flex gap-2`}>
        I'm 
        <div 
          className='titles-container' 
          ref={titleContainerRef}
          style={{overscrollBehavior: 'contain', touchAction: 'none' }}
          {...bind()}
          onTouchMove={(e) => e.preventDefault()}
        >
          {titles.map((title, index) => {
            let className = 'title ';
            if (index === titleIndex) {
              className += 'current';
            } else if (index === (titleIndex + 1) % titles.length) {
              className += 'next';
            } else if (index === ((titleIndex - 1 + titles.length) % titles.length)) {
              className += 'previous';
            }
            return (
              <span 
                ref={(el) => titleRefs.current[index] = el}
                className={className}
              >
                {title}
              </span>
            );
          })}
        </div>
      </h1>
      </div>
    </section>
  )
};

export default Hero;