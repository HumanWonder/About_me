import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import des composants de react-router-dom
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import CV from "./components/CV";
import "./styles/App.css";

const App = () => {

  return (
    <Router> {/* Envelopper toute l'application avec Router */}
      <div className="app">
        <nav className="navbar">
          <div className="logo">LOGO</div>
          <Navbar /> {/* Navbar utilise useLocation ici */}
        </nav>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
