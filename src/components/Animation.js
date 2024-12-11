import { useEffect } from "react";

export const useScrollAnimation = (selector = ".project-block", threshold = 0.3) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("appear");
            } else {
              entry.target.classList.remove("appear"); // Supprime la classe si l'élément sort du viewport
            }
          });
      },
      { threshold }
    );

    // Sélectionne les éléments cibles
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, threshold]);
};
