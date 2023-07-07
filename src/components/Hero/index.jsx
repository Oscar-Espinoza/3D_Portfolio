import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from '../Canvas';

const Hero = () => {
  return (
    <div className="relative">
      <div className='flex flex-row items-start gap-5 sticky top-10 left-0'>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className={`${styles.heroHeadText} z-10`}>
          <h1>Hi, I'm <span className="text-[#915eff]">Oscar</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-stack web and<br className="sm:block hidden" />  mobile software developer
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero