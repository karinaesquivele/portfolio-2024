import Button from "../atoms/Button";

function ProjectButtons({ preview = "", code = "" }) {
  const btnPreview = !preview; 
  const btnCode = !code;

  const goUrl = (url) => {
    if (url) {
      window.open(url, '_blank')
      // Descomenta la siguiente línea para abrir la URL
      // ;
    }
  };

  return (
    <div className="flex w-full justify-around flex-wrap">
      <Button
        variant="primary"
        size="sm"
        disabled={btnPreview}
        onClick={() => goUrl(preview)}
      >
        Preview
      </Button>

      {
        code && (
          <Button
        variant="light"
        size="sm"
        disabled={btnCode}
        onClick={() => goUrl(code)}
      >
        <span>Código Github</span>
      </Button>
        )
      }
    </div>
  );
}

export default ProjectButtons;
