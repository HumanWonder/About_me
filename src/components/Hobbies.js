import React from "react";
import "../styles/Shared.css";

const Hobbies = ({ setPage }) => {
  return (
    <div className="page-grid">
      <nav>
        <button onClick={() => setPage("home")}>Retour</button>
        <h1>Hobbies</h1>
      </nav>
      <div className="content">
        <p>Voici mes hobbies !</p>
        <ul>
          <li>Langages</li>
          <li>Résumé</li>
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;
