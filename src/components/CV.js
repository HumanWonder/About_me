import React from "react";

const CV = () => {
    return (
        <div className="project-content">
            <h1>My Resume</h1>
            <br />
            <p>Feel free to download or view my resume below:</p>
            <br />
            {/* Aperçu du CV (PDF intégré) */}
            <div className="cv-preview">
                <iframe
                    src="/assets/cv/Axelle-FOUQUEMBERG.pdf"
                    title="CV Preview"
                    width="100%"
                    height="900vh"
                    style={{ border: "none", toolbar: "0", view: "fit" }}
                ></iframe>
            </div>

            {/* Bouton de téléchargement */}
            <a href="/assets/cv/Axelle-FOUQUEMBERG.pdf" download="Axelle-FOUQUEMBERG.pdf">
                <button className="navbar-buttons">Download CV</button>
            </a>
        </div>
    );
};

export default CV;
