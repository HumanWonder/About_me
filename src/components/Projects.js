import React from "react";
import { useScrollAnimation } from "./Animation";
import {work} from "../assets/Images";
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
  console.log("Projects rendered"); //DEBUG
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
            {project.languages.length > 0 && (
              <p>
                <strong>Languages :</strong> {project.languages.join(", ")}
              </p>
            )}
            <a className="github_link" href={project.github} target="_blank" rel="noopener noreferrer">
              Github repository
            </a>
            {project.title === "Space Invaders" && (
              <button onClick={redirectToGame}>Wanna play?</button>
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
    </div>
  );
};

export default Projects;
