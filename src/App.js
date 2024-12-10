import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import "./styles/App.css";

const App = () => {
  const [page, setPage] = React.useState("home");

  const renderPage = () => {
    switch (page) {
      case "projects":
        return <Projects setPage={setPage} />;
      case "hobbies":
        return <Hobbies setPage={setPage} />;
      default:
        return <Home setPage={setPage} />;
    }
  };
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <button onClick={() => setPage("home")} className={page === "home" ? "active" : ""}>
          Home
        </button>
        <button onClick={() => setPage("projects")} className={page === "projects" ? "active" : ""}>
          Projets
        </button>
        <button onClick={() => setPage("hobbies")} className={page === "hobbies" ? "active" : ""}>
          Hobbies
        </button>
      </nav>
      <div className="page-content">
          {renderPage()}
        </div>
    </div>
  );
};

export default App;
