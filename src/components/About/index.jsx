import { styles } from "../../styles";
import { services } from "../../constants";
import "./styles.css";

const TechCard = ({ tech }) => {
  return (
    <div className="flex flex-col gap-2 max-w-max tech">
      <img className="w-24" src={tech.icon} alt={`${tech.icon}`} />
      <p className="text-center text-ellipsis overflow-hidden text-xs sm:text-base">
        {tech.name}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section
      className="relative z-0 sectionWrapper w-full flex flex-col gap-5 sm:gap-10"
      id="Tech Stack"
    >
      <div>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-16 justify-items-stretch bg-tertiary bg-opacity-30 p-3 rounded-lg">
        {services.map((service) =>
          service.technologies.map((tech) => (
            <TechCard tech={tech} key={tech.name} />
          ))
        )}
      </div>
    </section>
  );
};

export default About;
