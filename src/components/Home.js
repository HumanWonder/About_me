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
        <a href="https://github.com/HumanWonder"><span>Github</span></a> <a href="https://www.linkedin.com/in/axelle-fouquemberg-33336327b/"><span>LinkedIn</span></a> <a href="https://discordapp.com/users/601798056027095051"><span>Discord</span></a>
      </div>
    </div>
    <div className="avatar">
      <div className="avatar-circle"></div>
    </div>
  </main>
  );
};

export default Home;
