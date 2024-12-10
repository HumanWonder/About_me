import React from "react";
import "../styles/Home.css";

const Home = ({ setPage }) => {
  return (
    <div className="home-grid">
      <div className="intro">
        <h1>Hello There!</h1>
        <p>
          Une présentation rapide <span>comme sur mon CV</span>.
        </p>
      </div>
      <div className="avatar">
        <div className="avatar-circle" />
      </div>
      <div className="buttons">
        <button onClick={() => setPage("projects")}>Projets</button>
        <button onClick={() => setPage("hobbies")}>Hobbies</button>
      </div>
    </div>
  );
};

export default Home;
