import { styles } from "../../styles";
import { github } from "../../assets";
import { projects } from "../../constants";
import { GiClick } from "react-icons/gi";
import "./styles.css";

import { isDesktop } from "react-device-detect";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
  logo,
}) => {
  const handleDoubleClick = (e) => {
    if (!isDesktop) {
      e.preventDefault();
      window.open(website_link, "_blank");
    }
  };

  const handleClick = (e) => {
    if (isDesktop) {
      e.preventDefault();
      window.open(website_link, "_blank");
    }
  };

  return (
    <div
      className="project-container relative w-full h-96 cursor-pointer z-0"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="hover-project relative w-full bg-cover bg-center h-96 rounded-3xl"
      >
        <img
          src={image}
          alt={name}
          className="object-cover max-h-full w-full rounded-3xl"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 project-content flex justify-center items-center gap-2">
        <p>Tap twice</p>
        <GiClick size={40} />
      </div>

      <div className="absolute top-2 right-2 flex gap-2 z-20 project-content">
        <a
          href={source_code_link}
          target="blank"
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer scale"
        >
          <img src={github} alt="github" className="w-1/2 h-1/2" />
        </a>
        <div
          onClick={() => window.open(website_link, "blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-20 scale"
        >
          <img src={logo} alt="website_logo" className="w-1/2 h-1/2" />
        </div>
      </div>

      <div className="absolute z-10 top-0 w-full h-full flex flex-col justify-between project-content">
        <div className=" pr-32 p-3">
          <h3 className=" text-teal-300 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap w-full pb-2 px-3 rounded-lg gap-3">
          {tags.map((tag, i) => (
            <div
              key={name + tag.name + i}
              className="bg-black bg-opacity-40 px-2 rounded-md"
            >
              <p className={`text-[18px] ${tag.color}`}>#{tag.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="relative z-0 sectionWrapper" id="projects">
      <div>
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <p
          className={`${styles.sectionSubText} w-fit ${
            isDesktop ? "hidden" : ""
          }`}
        >
          Tap a project once to display more information or dismiss it, double
          click to follow the project link.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
