import { styles } from "../../styles";
import "./styles.css";

const Hero = () => {
  return (
    <section
      className="sectionWrapper hero-section flex flex-col justify-center items-center w-full"
      id="welcome"
    >
      <div className="sm:w-9/12 md:w-full">
        <p className={`${styles.sectionSubText} w-fit`}>
          Hi! My name is Oscar Espinoza
        </p>
        <h1 className="font-black text-white xl:text-[50px] lg:text-[40px] md:text-[40px] sm:text-[35px] xs:text-[30px] text-[30px] mt-2 gap-2 main-title">
          Full-Stack Developer
        </h1>
      </div>
    </section>
  );
};

export default Hero;
