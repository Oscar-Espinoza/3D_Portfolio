import React from 'react';
import { styles } from '../../styles';
import { services } from '../../constants';

const ServiceCard = ({ title, icon }) => {
  return (
      <div className="green-pink-gradient p-[2px] rounded-[20px] shadow-card cursor-pointer hover:scale-110 hover:text-[20px] transition-transform duration-200">
        <div className="bg-tertiary rounded-[20px] flex flex-col lg:flex-row justify-center items-center p-2 gap-2">
          <img src={icon} alt={title} className="w-6 object-contain" />
          <h3 className="text-white text-xs lg:text-[15px] font-bold">{title}</h3>
        </div>
      </div>
  )
}

const About = () => {
  return (
    <section className='relative z-0 sectionWrapper w-10/12 min-h-screen' id='about'>
      <div>
        <h2 className={styles.sectionSubText}>Overview</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] leadding-[30px]">
        Oscar Espinoza here, a Full Stack Developer with a focus on delivering reliable technology solutions. My skill set covers a range of front-end and back-end technologies. Combining technical proficiency with solid problem-solving and communication skills, I am prepared to tackle complex projects with efficiency and professionalism.
      </p>

      <div className="mt-10 flex gap-2 justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

export default About;
