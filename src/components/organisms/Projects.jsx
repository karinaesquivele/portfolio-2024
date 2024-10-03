import Typography from "../atoms/Typography";
import CardsWeb from "./CardsWeb";
import CardsMobile from "./CardsMobile";

function Projects() {
  const projects = [
    {
      title: "Portfolio FrontEnd",
      description: "Desarrollo y diseño de una landing page enfocada en la presentación de proyectos FrontEnd.",
      technology: {
        figma: { size: "sm", type: "" },
        js: { size: "sm", type: "" },
        react: { size: "sm", type: "" },
        tailwind: { size: "sm", type: "" },
        html: { size: "sm", type: "text" },
        sass: { size: "sm", type: "text" },
        gsap: { size: "sm", type: "text" },
      },
      preview:'a',
      code:'a',
    },
    {
      title: "Portfolio Ilustración",
      description: "Desarrollo de una landing page dedicada a la exhibición de trabajos de ilustración digital.",
      technology: {
        figma: { size: "sm", type: "" },
        js: { size: "sm", type: "" },
        react: { size: "sm", type: "" },
        tailwind: { size: "sm", type: "" },
        html: { size: "sm", type: "text" },
        sass: { size: "sm", type: "text" },
        gsap: { size: "sm", type: "text" },
      },
      preview:'',
      code:'',
    },
    {
      title: "Portfolio Wordpress",
      description: "Desarrollo de una landing page en WordPress, creando un tema personalizado desde cero. ",
      technology: {
        figma: { size: "sm", type: "" },
        js: { size: "sm", type: "" },
        react: { size: "sm", type: "" },
        tailwind: { size: "sm", type: "" },
        html: { size: "sm", type: "text" },
        sass: { size: "sm", type: "text" },
        gsap: { size: "sm", type: "text" },
      },
      preview:'',
      code:'',
    },
  ];
  return (
    <div className="projects">
      <div className="px-9 w-full pb-5">
        <Typography variant="title">PROYECTOS</Typography>
      </div>

      {/* Mostrar en pantallas grandes */}
      <div className="hidden md:block px-2">
        <CardsWeb projects={projects}/>
      </div>

      {/* Mostrar en pantallas móviles (menos de 1024px) */}
      <div className="block md:hidden">
        <CardsMobile projects={projects}/>
      </div>
    </div>
  );
}

export default Projects;
