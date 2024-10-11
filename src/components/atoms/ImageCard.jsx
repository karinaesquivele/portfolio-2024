import imagePorfolio from "../../assets/img/projects/project-portfolio-1.png"
import imageApp from "../../assets/img/projects/app-miruta.png"
import imageDefault from "../../assets/img/projects/inprocess.png"
function ImageCard({file=''}) {
  const urlImage =  file==='portfolio' ? imagePorfolio :
                    file==='app' ? imageApp :
                    imageDefault;
  return (
    
    <div className="card-image">
      <img src={urlImage} alt="" />
    </div>
  );
}

export default ImageCard;