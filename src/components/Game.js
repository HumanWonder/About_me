import React, { useEffect, useRef } from 'react';

const Game = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Charger le jeu une fois que le composant est monté
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.onload = () => {
                // Accéder au contenu de l'iframe
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

                // Ajouter un écouteur d'événements pour le bouton de démarrage
                const startButton = iframeDocument.getElementById('startButton');
                if (startButton) {
                    startButton.addEventListener('click', () => {
                        // Appeler la fonction gameStart dans le contexte de l'iframe
                        iframe.contentWindow.gameStart();
                    });
                }
            };
        }
    }, []);

    return (
        <div id="gameContainer" style={{ height: "100%", width: "100%" }}>
            <iframe
                ref={iframeRef}
                src="/assets/make-your-game-different-maps/index.html" // Utilise le chemin relatif vers ton index.html du jeu
                width="100%"
                height="100%"
                title="Game"
                style={{ border: 'none' }}
            >
            </iframe>
        </div>
    );
};

export default Game;
