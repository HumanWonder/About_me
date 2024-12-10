import React from "react";
import "../styles/Home.css";

const Home = ({ setPage }) => {
  return (
    <main className="main-section">
    <div className="intro">
      <h1>Hello there, I'm Axelle</h1>
      <p>
        I'm a full-stack developer passionate about creating intuitive and dynamic web experiences.
      </p>
      <div className="social-links">
        <span>Github</span> <span>LinkedIn</span> <span>Discord</span>
      </div>
    </div>
    <div className="avatar">
      <div className="avatar-circle"></div>
    </div>
  </main>
  );
};

export default Home;
