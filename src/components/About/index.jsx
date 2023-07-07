import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils';
import { SectionWrapper } from '../../hoc/SectionWrapper';

const ServiceCard = ({ title, icon }) => {
  return (
      <div className="green-pink-gradient p-[2px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-2 px-6 min-h-[200px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Introduction</p>
        <h2 className={styles.sectionSubText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leadding-[30px]"
      >
        Oscar Espinoza here, a Full Stack Developer with a focus on delivering reliable technology solutions. My skill set covers a range of front-end and back-end technologies. Combining technical proficiency with solid problem-solving and communication skills, I am prepared to tackle complex projects with efficiency and professionalism.
      </motion.p>

      <div className="mt-10 grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
