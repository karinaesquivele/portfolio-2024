import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Slider.module.scss'; // Importa tu archivo de estilos Sass
import prevIcon from "../../../assets/img/icons/arrow-left.svg";
import nextIcon from "../../../assets/img/icons/arrow-right.svg";

const Slider = ({ children, duration = 1.5 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState('auto'); // Estado para la altura dinámica
  const slideRefs = useRef([]); // Crear referencias para cada slide

  const slides = React.Children.toArray(children); // Convertir `children` en array

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  // Función para seleccionar un slide directamente desde los círculos
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Ajustar la altura del slider según el contenido del slide actual
    const updateSliderHeight = () => {
      if (slideRefs.current[currentIndex]) {
        const currentSlideHeight = slideRefs.current[currentIndex].offsetHeight || 300; // Altura mínima por si no hay contenido
        setSliderHeight(currentSlideHeight); // Actualizar la altura
      }
    };

    updateSliderHeight(); // Llamar la función para medir la altura
    window.addEventListener('resize', updateSliderHeight); // Ajustar en caso de cambio de tamaño de ventana

    // GSAP animación de opacidad para el contenido
    gsap.to(slideRefs.current, {
      duration: 1.5, // Duración de la transición
      opacity: 0, 
      ease: 'power2.inOut',
      pointerEvents: 'none', // Evitar interacción con slides invisibles
    });

    gsap.to(slideRefs.current[currentIndex], {
      duration: 1.5,
      opacity: 1, 
      ease: 'power2.inOut',
      pointerEvents: 'auto', // Reactivar interacción con el slide actual
    });

    return () => window.removeEventListener('resize', updateSliderHeight); // Limpiar el listener

  }, [currentIndex]);

  return (
    <div>
      {/* Contenedor del slider */}
      <div 
        className="relative w-full overflow-hidden" 
        style={{ height: sliderHeight }} // Aplicar la altura dinámica
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={el => (slideRefs.current[index] = el)} // Asignar referencia a cada slide
            className={`absolute top-0 left-0 w-full flex items-center justify-center`} // Clase para centrar el contenido
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            {slide} {/* Renderizar contenido del slide */}
          </div>
        ))}

        {/* Botón para el slide anterior */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent focus:outline-none"
        >
          <img src={prevIcon} alt="Previous Slide" className="w-10 h-10" />
        </button>

        {/* Botón para el siguiente slide */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent focus:outline-none"
        >
          <img src={nextIcon} alt="Next Slide" className="w-10 h-10" />
        </button>
      </div>

      {/* Controles de círculos, debajo del slider */}
      <div className="flex justify-center mt-5 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)} // Ir al slide correspondiente
            className={`w-6 h-6 rounded-full focus:outline-none slider-buttons transition-colors ${
              index === currentIndex ? 'active' : 'default'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
