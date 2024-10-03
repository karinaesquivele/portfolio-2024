import Button from "../atoms/Button";
function ProjectButtons({preview='',code=''}) {
  const btnPreview = preview ==='' ? true : false;
  const btnCode= code ==='' ? true : false
  return (
    <div className="flex w-full justify-around flex-wrap">
      <Button variant="primary" size="sm" disabled={btnPreview}>
        Preview{btnPreview}
      </Button>
      <Button variant="light" size="sm" disabled={btnCode}>
        <span>Código Github</span>
      </Button>
    </div>
  );
}

export default ProjectButtons;
