import React from "react";
import { useScrollAnimation } from "./Animation";
import "../styles/Shared.css";

const projectsData = [
  {
    id: 1,
    title: "Playing Video Games",
    description: "Who doesn't like a good video game session?",
    images: ["image1.jpg", "image2.jpg"],
  },
  {
    id: 2,
    title: "Drawing",
    description: "Something I picked up and still enjoy doing from time to time.",
    images: ["image3.jpg", "image4.jpg"],
  },
  {
    id: 3,
    title: "Reading",
    description: "My all-time favourite since I was a kid.",
    images: ["image4.jpg", "image5.jpg"],
  },
];

const Hobbies = () => {
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

export default Hobbies;
