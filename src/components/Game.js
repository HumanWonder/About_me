import React, { useEffect } from 'react';

const Game = () => {
    useEffect(() => {
        // Fonction utilitaire pour charger un script
        const loadScript = async (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const loadAllScripts = async () => {
            try {
                await loadScript('/assets/make-your-game-different-maps/script/gameManager.js');
                await loadScript('/assets/make-your-game-different-maps/script/utils.js');
                await loadScript('/assets/make-your-game-different-maps/script/settings.js');
                await loadScript('/assets/make-your-game-different-maps/script/player.js');
                await loadScript('/assets/make-your-game-different-maps/script/ennemies.js');
                await loadScript('/assets/make-your-game-different-maps/script/collisions.js');
            } catch (err) {
                console.error("Erreur lors du chargement des scripts :",err);
            }
        }
        // Charger les scripts nécessaires
        // const scripts = [
        //     '/assets/make-your-game-different-maps/script/gameManager.js',
        //     '/assets/make-your-game-different-maps/script/utils.js',
        //     '/assets/make-your-game-different-maps/script/settings.js',
        //     '/assets/make-your-game-different-maps/script/player.js',
        //     '/assets/make-your-game-different-maps/script/ennemies.js',
        //     '/assets/make-your-game-different-maps/script/collisions.js',
        // ].map(loadScript);

        // Charger le fichier CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/assets/make-your-game-different-maps/style/style.css';
        document.head.appendChild(link);

        loadAllScripts();
    }, []);
        // Nettoyage à la destruction du composant
    //     return () => {
    //         scripts.forEach((script) => document.body.removeChild(script));
    //         document.head.removeChild(link);
    //     };
    // }, []); // Ne se lance qu'une fois lors du montage

    return (
        <div id="gameContainer">
            <iframe
                src="/assets/make-your-game-different-maps/index.html" // Utilise le chemin relatif vers ton index.html du jeu
                width="100%"
                height="100%"
                title="Game"
            ></iframe>
        </div>
    );
};

export default Game;
