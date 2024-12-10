import React from "react";
import "../styles/Shared.css";

const Projects = ({ setPage }) => {
  return (
    <div className="page-grid">
      <nav>
        <button onClick={() => setPage("home")}>Retour</button>
        <h1>Projets</h1>
      </nav>
      <div className="content">
        <p>Voici mes projets !</p>
        <ul>
          <li>Projet 1</li>
          <li>Projet 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
