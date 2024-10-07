import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const applyFadeInAnimation = (elements, triggerElement) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
};
