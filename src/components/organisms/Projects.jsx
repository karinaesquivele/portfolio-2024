import Typography from "../atoms/Typography";
import CardsWeb from "./CardsWeb";
import CardsMobile from "./CardsMobile";

function Projects() {
  const projects = [
    {
      title: "Portfolio FrontEnd",
      description: "Desarrollo y diseño de una landing page enfocada en la presentación de proyectos FrontEnd.",
      image:'portfolio',
      technology: {
        figma: { size: "sm", type: "" },
        js: { size: "sm", type: "" },
        react: { size: "sm", type: "" },
        tailwind: { size: "sm", type: "" },
        html: { size: "sm", type: "text" },
        sass: { size: "sm", type: "text" },
        gsap: { size: "sm", type: "text" },
      },
      preview:'https://karinaesquivele.github.io/portfolio-2024/',
      code:'https://github.com/karinaesquivele/portfolio-2024',
    },
    {
      title: "App MiRuta Morelia",
      image:'app',
      description: "Diseño de aplicación móvil para rutas de transporte público.",
      technology: {
        figma: { size: "sm", type: "" },
        android: { size: "sm", type: "" },
        materialD: { size: "sm", type: "text" },
        ui: { size: "sm", type: "text" },
        ux: { size: "sm", type: "text" },
        
      },
      preview:'https://www.figma.com/proto/1KV0ro16cifFkjvBTuxUIH/CODER-Aplicacion?node-id=2-36146&node-type=canvas&t=WVQy4kZmaknbaa3L-1&scaling=min-zoom&content-scaling=fixed&page-id=2%3A21951&starting-point-node-id=2%3A36074',
      code:false,
    },
    {
      title: "Portfolio Wordpress",
      image:'project-portfolio-1.png',
      description: "Desarrollo de una landing page en WordPress, creando un tema personalizado desde cero. ",
      technology: {
        figma: { size: "sm", type: "" },
        js: { size: "sm", type: "" },
        wp: { size: "sm", type: "" },
        html: { size: "sm", type: "text" },
        css: { size: "sm", type: "text" },
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
