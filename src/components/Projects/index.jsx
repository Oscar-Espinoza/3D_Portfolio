import { styles } from "../../styles";
import { github } from "../../assets";
import { projects } from "../../constants";
import { useEffect } from "react";

const ProjectCard = ({ name, description, tags, image, source_code_link, website_link, logo }) => {
  return (
    <a href={website_link} target="blank" className="relative w-full h-96 cursor-pointer z-0">
      <div 
        style={{ backgroundImage: `url(${image})` }}
        className="relative w-full bg-cover bg-center blur-sm before:bg-black before:bg-opacity-30 project"
      >
        <img src={image} alt={name} className="object-cover h-96" />
      </div>
      <div className="absolute top-2 right-2 flex gap-2 z-20">
        <a href={source_code_link} target="blank"
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github} 
            alt="github"
            className="w-1/2 h-1/2"
          />
        </a>
        <div
          onClick={() => window.open(website_link, "blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-20"
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

        <div className="flex flex-wrap w-full pb-2 px-3 rounded-lg gap-3">
          {tags.map((tag) => (
            <div className="bg-black bg-opacity-40 px-2 rounded-md">
              <p key={tag.name} className={`text-[18px] ${tag.color}`}>
                #{tag.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </a>
  )
}

const Projects = () => {
  useEffect(() => {
    console.log(projects)
  }, [])
  
  return (
    <section className="relative z-0 sectionWrapper" id='projects'>
      <div>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects