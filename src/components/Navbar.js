import React from "react";
import { Link, useLocation } from 'react-router-dom'; // Import des composants de react-router-dom
import "../styles/App.css";

const Navbar = () => {
  const location = useLocation(); // Permet d'accéder à l'URL actuelle

  const tabs = [
    { id: "home", label: "Home", path: "/" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "hobbies", label: "Hobbies", path: "/hobbies" },
    { id: "cv", label: "CV", path: "/cv" },
  ];

  // Gestion des onglets à afficher
  const filteredTabs = tabs
    .filter((tab) => tab.id !== "game") // Exclut toujours "Game" de la navbar
    .map((tab) => {
      if (tab.id === "projects" && location.pathname === "/game") {
        // Renomme "Projects" en "Retour" lorsque "Game" est actif
        return { ...tab, label: "Back" };
      }
      return tab;
    });

  // Exclut l'onglet actif
  const displayedTabs = filteredTabs.filter((tab) => tab.path !== location.pathname);

  return (
    <div className="navbar-buttons">
      {displayedTabs.map((tab) => (
        <Link
          key={tab.id}
          to={tab.path}
          className={location.pathname === tab.path ? "active" : ""}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};


  export default Navbar;