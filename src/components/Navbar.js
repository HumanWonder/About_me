import React from "react";
import { Link, useLocation } from 'react-router-dom'; // Import des composants de react-router-dom
import "../styles/App.css";

const Navbar = () => {
    const location = useLocation(); // Permet d'accéder à l'URL actuelle
  
    const tabs = [
      { id: "home", label: "Home", path: "/" },
      { id: "projects", label: "Projects", path: "/projects" },
      { id: "hobbies", label: "Hobbies", path: "/hobbies" },
      // { id: "game", label: "Game", path: "/game" },
    ];
  
    return (
      <div className="navbar-buttons">
        {tabs.map((tab) => (
          <Link 
            key={tab.id} 
            to={tab.path} 
            className={location.pathname === tab.path ? "active" : ""} // Applique 'active' si le path correspond
          >
            
            {tab.label}
          </Link>
        ))}
      </div>
    );
  };

  export default Navbar;