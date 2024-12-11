import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectBlocks = document.querySelectorAll(".project-block");
    projectBlocks.forEach((block) => observer.observe(block));

    return () => {
      projectBlocks.forEach((block) => observer.unobserve(block));
    };
  }, []);
};
