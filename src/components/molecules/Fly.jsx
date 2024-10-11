import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importar ScrollTrigger
import iconSend from "../../assets/img/icons/send.svg";

// Registrar los plugins
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Fly = () => {
  const pathRef = useRef(null);
  const planeRef = useRef(null);
  const containerRef = useRef(null); // Referencia para el div principal

  useEffect(() => {
    const path = pathRef.current;
    const plane = planeRef.current;
    const container = containerRef.current;

    const length = path.getTotalLength();

    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.opacity = "0";

    const duration = 3;

    // Configurar el trigger para iniciar animaciones al hacer scroll al contenedor principal
    ScrollTrigger.create({
      trigger: container, // El contenedor principal será el trigger
      start: "top 80%", // Empieza cuando la parte superior del contenedor esté en el 80% de la vista
      once: true,
      onEnter: () => {
        // Animar el trazado de la línea
        gsap.to(path.style, {
          strokeDashoffset: 0,
          duration: duration,
          ease: "power2.inOut",
          onComplete: () => {
            path.style.strokeDasharray = "6 6";
            path.style.strokeDashoffset = "0";
          },
        });

        // Animar la opacidad de la línea
        gsap.to(path.style, {
          opacity: 1,
          duration: duration,
          delay: duration,
          ease: "power2.inOut",
        });

        // Animar el avión de papel
        gsap.to(plane, {
          duration: duration,
          ease: "power2.inOut",
          motionPath: {
            path: path,
            align: path,
            /* autoRotate: true, */
          },
          onComplete: () => {
            gsap.to(plane, {
              rotation: 2,
              duration: 0.5,
              ease: "power2.inOut",
            });

            gsap.to(plane, {
              y: "-55px",
              x: "510%",
              duration: 0.1,
              ease: "power2.inOut",
              scale: 3,
            });
            
            gsap.to(path.style, {
              opacity: 1,
              duration: 1,
              delay: 1,
              ease: "power2.inOut",
            });
          },
        });
      },
    });
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", top: '130px' }}> {/* Asignar la referencia al div principal */}
      <svg
        width="450"
        height="450"
        viewBox="0 0 450 450"
        style={{ position: "relative", zIndex: "1" }}
      >
        <path
          ref={pathRef}
          d="M1.61112 316.353C69.7392 305.506 157.125 240.748 127.984 126.46C123.228 107.809 115.555 88.6308 99.6373 88.3407C87.5141 88.1197 74.1396 91.2447 64.1664 99.45C50.1605 110.973 44.917 124.02 45.7144 147.145C46.95 182.976 59.0699 211.14 84.8216 227.094C108.988 242.066 165.078 251.131 175.138 208.921C178.954 192.913 177.292 174.656 175.847 157.68C173.976 135.722 173.522 113.742 172.338 91.7858C170.645 60.4125 170.734 32.1573 175 2.00012"
          fill="transparent"
          stroke="#e40f79"
          strokeWidth="2"
          strokeDasharray="0"
        />
      </svg>
      <img
        ref={planeRef}
        src={iconSend}
        alt="Avión de papel"
        style={{
          position: "absolute",
          width: "35px",
          height: "35px",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default Fly;
