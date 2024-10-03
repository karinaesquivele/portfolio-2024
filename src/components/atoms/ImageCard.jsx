import imageUrl from "../../assets/img/projects/project-portfolio-1.png"
function ImageCard() {
  return (
    <div className="card-image">
      <img src={imageUrl} alt="" />
    </div>
  );
}

export default ImageCard;