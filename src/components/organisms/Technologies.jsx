import Typography from "../atoms/Typography";
import ListTechnologies from "./ListTechnologies";


function Technologies() {
  const technologies = [
    {technology:'html',size:'lg',level:'Avanzado'},
    {technology:'css',size:'lg',level:'Avanzado'},
    {technology:'bootstrap',size:'lg',level:'Avanzado'},
    {technology:'vue',size:'lg',level:'Avanzado'},
    {technology:'js',size:'lg',level:'Avanzado'},
    {technology:'wp',size:'lg',level:'Principiante'},
    {technology:'react',size:'lg',level:'Principiante'},
    {technology:'figma',size:'lg',level:'Principiante'},
    {technology:'sass',size:'lg',level:'Principiante'},
    {technology:'tailwind',size:'lg',level:'Principiante'},
  ]
  return (
    <div className="technologies">
      <div className="px-9 w-full pb-1">
        <Typography variant="title">Tecnologías</Typography>
      </div>
      <ListTechnologies technologies={technologies} />
      
    </div>
  );
}

export default Technologies;
