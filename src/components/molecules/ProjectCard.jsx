import ImageCard from "../atoms/ImageCard";
import Typography from "../atoms/Typography";
import ProjectIcons from "./ProjectIcons";
import ProjectButtons from "./ProjectButtons";
function ProjectCard({title='Title project',description='Description',technologies={},preview='',code=''}) {
  return (
    <div className="card mx-4 md:mx-2 lg:mx-4 p-5">
      <ImageCard />
      <div className="card-body">
        <Typography variant="subtitle">
          <b className="uppercase">{title}</b>
        </Typography>
        <div className="card-description">
          <Typography variant="card-text">
            {description}
          </Typography>
        </div>
      </div>
      <div className="card-icons py-5">
        <ProjectIcons technologies={technologies} />
      </div>
      <div className="card-buttons">
        <ProjectButtons preview={preview} code={code} />
      </div>
    </div>
  );
}

export default ProjectCard;
