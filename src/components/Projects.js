import React from "react";
import { useScrollAnimation } from "./Animation";
import "../styles/Shared.css";

const projectsData = [
  {
    id: 1,
    title: "Space Invaders",
    description: "A recreation of the arcade classic using only Javascript and no canvas. A project within my formation called 'make-your-game'. A project to learn about the DOM and game logic.",
    languages: ["CSS", "JavaScript"],
    github: "https://github.com/HumanWonder/Space_Invaders",
    images: ["image1.jpg", "image2.jpg"],
  },
  {
    id: 2,
    title: "Jeu Multijoueur",
    description: "Un jeu en ligne interactif utilisant Bevy et Renet.",
    languages: ["Rust", "Bevy", "Renet"],
    github: "https://github.com/votre-repo/jeu-multijoueur",
    images: ["image3.jpg", "image4.jpg"],
  },
];

const Projects = () => {
  useScrollAnimation();
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className={`project-block ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Langages :</strong> {project.languages.join(", ")}
            </p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          </div>
          <div className="project-images">
            {project.images.map((image, i) => (
              <img key={i} src={image} alt={`${project.title} ${i + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
