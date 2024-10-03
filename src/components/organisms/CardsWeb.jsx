import ProjectCard from "../molecules/ProjectCard";

function CardsWeb({ projects = [] }) {
  
  return (
    <div className="grid md:grid-cols-3 md:grid-rows-1">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technology}
          code={project.code}
          preview={project.preview}
        />
      ))}
    </div>
  );
}

export default CardsWeb;
