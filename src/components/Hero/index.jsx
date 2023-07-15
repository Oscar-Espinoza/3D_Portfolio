import React from 'react';
import { styles } from "../../styles";
import './styles.css'

const Hero = () => {
  return (
    <section className="sectionWrapper hero-section" id='hero'>
      <p className={styles.sectionSubText}>Hi! My name is Oscar Espinoza</p>
      <h1 className={`${styles.heroHeadText}`}>Welcome!</h1>
    </section>
  )
}

export default Hero