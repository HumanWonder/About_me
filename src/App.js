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
        <div className="navbar-buttons">
    {page !== "home" && ( // Affiche le bouton "Home" uniquement si on n'est pas sur l'accueil
      <button
        onClick={() => setPage("home")}
        className={page === "home" ? "active" : ""}
      >
        Home
      </button>
    )}
    {["projects", "hobbies"].map((tab) => (
      <button
        key={tab}
        onClick={() => setPage(tab)}
        className={page === tab ? "active" : ""}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
      </nav>
      <div className="page-content">
          {renderPage()}
        </div>
    </div>
  );
};

export default App;
