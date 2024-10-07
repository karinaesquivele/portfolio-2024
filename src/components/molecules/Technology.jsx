import IconTechnology from "../atoms/IconTechnology";
import Typography from "../atoms/Typography";
function Technology({technology={}}) {
  const tech = technology.technology === 'figma' ?  'Figma' :
               technology.technology === 'html' ? "HTML" :
               technology.technology === 'css' ? 'CSS' :
               technology.technology === 'sass' ? 'Sass' :
               technology.technology === 'bootstrap' ? 'Bootstrap' :
               technology.technology === 'tailwind' ? 'TailwindCss' : 
               technology.technology === 'js' ? 'JavaScript' :
               technology.technology === 'react' ? 'React' : 
               technology.technology === 'vue' ? 'VueJs' :
               technology.technology === 'wp' ? 'Wordpress' :''
  return (
    <div className="list-technology flex md:flex-col items-center">
      <div className="px-2 py-3 flex justify-center">
        <IconTechnology technology={technology.technology} size={technology.size} />
      </div>
      <div className="px-2 md:px-2">
        <Typography variant="subtitle"><span className="block text-left md:inline">{tech}</span></Typography>
        <Typography variant="main-text"><span className="block text-left md:inline">{technology.level}</span></Typography>
      </div>
    </div>
  );
}

export default Technology;
