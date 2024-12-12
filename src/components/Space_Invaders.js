import React from "react";

const Game = () => {
    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <iframe src={`${process.env.PUBLIC_URL}/public/assets/Game/make-your-game-different-maps/index.html`}
                title="Space Invaders"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                }}
            ></iframe>
        </div>
    );
};

export default Game;