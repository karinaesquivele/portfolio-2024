import Slider from "./Slider/Slider";
import ProjectCard from "../molecules/ProjectCard";
function CardsMobile({ projects = [] }) {
  return (
    <div className="cards-mobile">
      <Slider duration={5000}>
      {projects.map((project, index) => (
          <div
            key={index}
            className="w-5/6 h-full flex items-center justify-center"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technology}
              code={project.code}
              preview={project.preview}
              image={project.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardsMobile;
