import { useEffect, useRef } from "react";
import Technology from "../molecules/Technology";
import { applyFadeInAnimation } from "../../utils/animations"; // Importa la función

function ListTechnologies({ technologies = [] }) {
  const techRef = useRef([]);
  const sectionRef = useRef(null); // Referencia al contenedor de la sección

  useEffect(() => {
    applyFadeInAnimation(techRef.current, sectionRef.current); // Aplica la animación
  }, []);

  return (
    <div ref={sectionRef} className=" flex justify-around md:justify-center items-center md:items-baseline flex-wrap">
      {technologies.map((tech, index) => (
        <div
          className="mt-7"
          key={index}
          ref={(el) => (techRef.current[index] = el)} // Referencia individual para cada elemento
        >
          <Technology technology={tech} />
        </div>
      ))}
    </div>
  );
}

export default ListTechnologies;
