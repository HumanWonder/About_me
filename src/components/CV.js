import React from "react";
import "../styles/CV.css";

const CV = () => {
    return (
        <div className="content">
            <h1>My Resume</h1>
            <br />
            <p>Feel free to download or view my resume below:</p>
            {/* Bouton de téléchargement */}
            <a href="/public/assets/cv/Axelle-Fouquemberg-cv.pdf" download="Axelle-FOUQUEMBERG.pdf">
                <button className="CV_download">Download</button>
            </a>
            <br />
            {/* Aperçu du CV (PDF intégré) */}
            <div className="cv-preview">
                <iframe
                    src="/assets/cv/Axelle-Fouquemberg-cv.pdf"
                    title="CV Preview"
                    width="100%"
                    height="800vh"
                    style={{ border: "none", toolbar: "0", view: "fit" }}
                ></iframe>
            </div>
        </div>
    );
};

export default CV;
