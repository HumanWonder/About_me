import React from "react";
import { useScrollAnimation, scrollToTop} from "./Animation";
import { work } from "../assets/Images";
import "../styles/Projects.css";


const projectsData = [
  {
    id: 1,
    title: "Space Invaders",
    description: "A recreation of the arcade classic using only Javascript and no canvas. A project within my formation called 'make-your-game'. The main difficulty is to learn about the DOM and create game logic without the use of canvas or frameworks.",
    languages: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/HumanWonder/Space_Invaders",
    images: [work.spaceInvaders.EnJeu, work.spaceInvaders.death_screen],
  },
  {
    id: 2,
    title: "Smart Road",
    description: "A simulation of an intelligent road intersection with autonomous vehicles. The goal is to avoid accidents. There are no traffic signals here, just vehicles with destinations and a shared intersection.",
    languages: ["Rust", "SDL2"],
    github: "https://github.com/HumanWonder/smart-road",
    images: [work.smartRoad.Simulation, work.smartRoad.Results_Menu],
  },
  {
    id: 3,
    title: "Multiplayer FPS",
    description: "An interactive online game using Bevy and Renet. UDP, modeling, menus, movement management, etc. We were tasked with recreating Maze War, but in our enthusiasm, a 3D game was born.",
    languages: ["Rust", "Bevy", "Renet"],
    github: "https://github.com/HumanWonder/Multiplayer-FPS",
    images: [work.multiplayer.Menu, work.multiplayer.Gaming],
  },
  {
    id: 4,
    title: "Go-reloaded",
    description: "The first program from the training that started in May 2022. A text processing program. When learning, it’s important to look back and see how much progress has been made. Nothing has been modified since.",
    languages: ["Golang"],
    github: "https://github.com/HumanWonder/go-reloaded",
    images: [work.go_reloaded.First, work.go_reloaded.Second],
  },
  {
    id: 5,
    title: "See more →",
    description: "",
    languages: [],
    github: "https://github.com/HumanWonder",
    images: [work.github.name, work.github.welcome],
  },
];

const redirectToGame = () => {
  window.location.href = "/assets/make-your-game-different-maps/index.html";
};

const Projects = () => {

  useScrollAnimation("project-block");

  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className={`project-block ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="project-content">
            <div className="project-text-background">
              <h2>{project.title}</h2>
              {project.description.length > 0 && (
                <p>{project.description}</p>
              )}
              {project.languages.length > 0 && (
                <p>
                  <strong>Languages :</strong> {project.languages.join(", ")}
                </p>
              )}
            </div>
            <a className="github_link" href={project.github} target="_blank" rel="noopener noreferrer">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.12 20.17 9.29 21.5C9.79 21.58 10 21.27 10 21V18.9C6.73 19.61 6.15 17.75 6.15 17.75C5.72 16.62 5.1 16.35 5.1 16.35C4.22 15.81 5.18 15.83 5.18 15.83C6.18 15.91 6.68 16.85 6.68 16.85C7.5 18.25 8.98 17.87 9.54 17.65C9.63 17.01 9.88 16.56 10.15 16.32C7.52 16.05 4.75 15.06 4.75 10.72C4.75 9.5 5.18 8.5 5.88 7.72C5.77 7.46 5.4 6.4 5.98 4.98C5.98 4.98 6.86 4.7 9.98 6.6C10.83 6.35 11.72 6.22 12.62 6.22C13.52 6.22 14.41 6.35 15.26 6.6C18.38 4.7 19.26 4.98 19.26 4.98C19.84 6.4 19.47 7.46 19.36 7.72C20.06 8.5 20.49 9.5 20.49 10.72C20.49 15.07 17.71 16.04 15.07 16.31C15.42 16.62 15.73 17.19 15.73 18.08V21C15.73 21.27 15.94 21.58 16.44 21.5C20.61 20.17 23.73 16.42 23.73 12C23.73 6.48 19.25 2 13.73 2H12Z" />
              </svg>
              View Github repository
            </a>
            {project.title === "Space Invaders" && (
              <button className="play_button" onClick={redirectToGame}>Wanna play?</button>
            )}
          </div>
          <div className="project-images">
            {project.images.map((image, i) => (
              <img className={`${project.id === 2 ? "second-project" : ""}`}
                key={i} src={image} alt={`${project.title} ${i + 1}`} />
            ))}
          </div>
        </div>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
    </div>
  );
};

export default Projects;
