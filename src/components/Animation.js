import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    console.log("useEffect appelé");
    const elements = document.querySelectorAll(".hobby-block");

    const handleScroll = () => {
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75; // Visible quand 75% est dans l'écran

        console.log(`Hobby ${index + 1} - Top: ${rect.top}, Visible: ${isVisible}`); // DEBUG
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
  }, []);
};