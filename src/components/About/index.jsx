import React, { useState } from 'react';
import { styles } from '../../styles';
import { services } from '../../constants';

const ServiceCard = ({ title, icon, index, setCurrentService }) => {
  return (
      <div className="green-pink-gradient p-[2px] rounded-[20px] shadow-card cursor-pointer hover:scale-125 hover:text-[20px] transition-transform duration-200" onClick={() => setCurrentService(index)}>
        <div className="bg-tertiary rounded-[20px] flex flex-col lg:flex-row justify-center items-center p-2 gap-2">
          <img src={icon} alt={title} className="w-6 object-contain" />
          <h3 className="text-white text-xs lg:text-[15px] font-bold">{title}</h3>
        </div>
      </div>
  )
}

const TechCard = ({ tech }) => {
  console.log(tech);
  return (
    <></>
  )
}

const About = () => {
  const [currentService, setCurrentService] = useState(0)
  console.log(services[currentService].technologies);
  return (
    <section className='relative z-0 sectionWrapper w-10/12 flex flex-col gap-10' id='about'>
      <div>
        <h2 className={styles.sectionSubText}>Overview</h2>
      </div>

      <p className="text-secondary text-[17px] leadding-[30px]">
        Oscar Espinoza here, a Full Stack Developer with a focus on delivering reliable technology solutions. My skill set covers a range of front-end and back-end technologies. Combining technical proficiency with solid problem-solving and communication skills, I am prepared to tackle complex projects with efficiency and professionalism.
      </p>

      <div className="flex gap-2 justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} setCurrentService={setCurrentService} />
        ))}
      </div>

      <div className=' h-96 w-full border border-solid border-gray-700 rounded-lg py-2 px-4'>
          
      </div>
    </section>
  )
}

export default About;
