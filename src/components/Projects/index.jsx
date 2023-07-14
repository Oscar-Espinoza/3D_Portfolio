import { styles } from "../../styles";
import { git, github } from "../../assets";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link, logo }) => {
  return (
    <div className="relative w-full">
      <div 
        style={{ backgroundImage: `url(${image})` }}
        className="relative w-full bg-cover bg-center blur-sm before:bg-black before:bg-opacity-30 project"
      >
        <img src={image} alt={name} className="object-cover" />
      </div>
      <div className="absolute top-2 right-2 z-20">
        <div
          onClick={() => window.open(source_code_link, "blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github} 
            alt="github"
            className="w-1/2 h-1/2"
          />
        </div>
        <div
          onClick={() => window.open(website_link, "blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={logo} 
            alt="website_logo"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>

      <div className="absolute z-10 top-0 w-full h-full flex flex-col justify-between">

        <div className=" pr-32 p-3">
          <h3 className=" text-slate-900 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="flex w-full pb-2 px-3 rounded-lg gap-3">
          {tags.map((tag) => (
            <div className="bg-black bg-opacity-40 px-2 rounded-md">
              <p key={tag.name} className={`text-[18px] ${tag.color}`}>
                #{tag.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

const Projects = () => {
  return (
    <section className="relative z-0 sectionWrapper" id='projects'>
      <div>
      <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <div className="w-full felx">
        <p className="mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects