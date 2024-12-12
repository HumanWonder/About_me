import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Game from "./components/Space_Invaders";
import "./styles/App.css";

const App = () => {
  /*Pour faciliter la création de nouvelles pages*/ 
  const tabs = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "hobbies", label: "Hobbies" },
  ];
  const [page, setPage] = React.useState("home");
  const navigate = (target) => setPage(target);

  const renderPage = () => {
    switch (page) {
      case "projects":
        return <Projects setPage={setPage} />;
      case "hobbies":
        return <Hobbies setPage={setPage} />;
      case "game":
        return <Game />;
      default:
        return <Home setPage={setPage} />;
    }
  };
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="navbar-buttons">
          {tabs
            .filter((tab) => tab.id !== page) // Filtre l'onglet actif
            .map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPage(tab.id)}
                className={page === tab.id ? "active" : ""}
              >
                {tab.label}
              </button>
            ))}
        </div>
      </nav>
      <div className="page-content">
        {renderPage()}
      </div>
      {/* pour avoir une page de style pour chaque page ex: .page-content.projects */}
      {/* <div className={`page-content ${page}`}>
  {renderPage()}
</div> */}

    </div>
  );
};

export default App;
