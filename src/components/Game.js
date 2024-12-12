// import React, { useEffect } from 'react';

const Game = () => {

    return (
        <div id="gameContainer" style={{ height: "100%", width: "100%" }}>
            <iframe
                src="/assets/make-your-game-different-maps/index.html" // Utilise le chemin relatif vers ton index.html du jeu
                width="100%"
                height="100%"
                title="Game"
                style={{ border: 'none' }}
            >
                <script>
                    document.getElementById("startButton").addEventListener("click", gameStart);

                </script>
            </iframe>
        </div>
    );
};

export default Game;
