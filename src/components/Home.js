import React from "react";
import "../styles/Home.css";

const Home = ({ setPage }) => {
  return (
    <main className="main-section">
      <div className="intro">
        <h1>
          Hello there,<br />
          <span className="second-line">I'm Axelle</span>
        </h1>

        <p>
          Currently training to become a full-stack developer, I am exploring the creation of diverse and enriching projects.
        </p>

        <div className="social-links">
          <a href="https://github.com/HumanWonder"><span>Github</span></a>
          <a href="https://www.linkedin.com/in/axelle-fouquemberg-33336327b/"><span>LinkedIn</span></a>
          <a href="https://discordapp.com/users/601798056027095051"><span>Discord</span></a>
          <a href="/assets/cv/Axelle-FOUQUEMBERG.pdf" target="_blank" rel="noopener noreferrer"><span>CV</span></a>
        </div>

      </div>
      <div className="avatar">
        <div className="avatar-circle">
          <img src="https://avatar.iran.liara.run/public/97" alt="avatar_img"></img>
        </div>
      </div>
    </main>
  );
};

export default Home;
