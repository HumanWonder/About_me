import { useEffect } from "react";
import { hobbies } from "../assets/Images";

export const useScrollAnimation = (className) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const handleScroll = () => {
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75; // Visible quand 75% est dans l'écran

        console.log(`${className} ${index + 1} - Top: ${rect.top}, Visible: ${isVisible}`); // DEBUG
        if (isVisible) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Vérifie immédiatement si un élément est déjà visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, [className]);
};

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const arrowMap = {
  left: {
    0: hobbies.videogames.pixel_arrow_left,
    1: hobbies.other.other_left,
    2: hobbies.drawings.drawn_left,
    default: hobbies.other.other_left,
  },
  right: {
    0: hobbies.videogames.pixel_arrow_right,
    1: hobbies.other.others_right,
    2: hobbies.drawings.drawn_right,
    default: hobbies.other.others_right,
  }
};

export function getArrow(direction, index) {
  console.log(direction, index);
  return arrowMap[direction]?.[index] || arrowMap[direction]?.default;
}