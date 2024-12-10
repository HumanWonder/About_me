import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import "./styles/App.css";

const App = () => {
  const [page, setPage] = useState("home");

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
    <div className="app-container">
      <CSSTransition
        in={true}
        appear={true}
        key={page}
        timeout={500}  // Durée de la transition
        classNames="slide"
      >
        <div className="page-content">
          {renderPage()}
        </div>
      </CSSTransition>
    </div>
  );
};

export default App;
