import IconTechnology from "../atoms/IconTechnology";

function ProjectIcons({technologies={}}) {
 

  return (
    <div className="project__icons flex justify-center flex-wrap items-center">
      {Object.keys(technologies).map((tech) => (
        <IconTechnology
          key={tech}
          technology={tech}
          size={technologies[tech].size}
          type={technologies[tech].type}
        />
      ))}
    </div>
  );
}

export default ProjectIcons;
