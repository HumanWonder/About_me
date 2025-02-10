//import { startStopwatch, stopStopwatch, resetStopwatch } from "./utils";
//blocks the player movements if game is paused or hasn't started yet

//button that loads the game (ideally)
function gameStart() {
    startStopwatch();
    initiateScore();
    // Récupérer les éléments DOM nécessaires
    const startDiv = document.getElementById("startMenu");
    const ws = document.getElementById("workspace");
    console.log(startDiv, ws);

    // Vérifier si les éléments sont trouvés
    if (!startDiv || !ws) {
        console.error("StartMenu or Workspace not found");
        return;
    }

    // Afficher le workspace
    ws.style.display = "block";

    // Définir les limites du workspace pour les collisions
    setLimits();

    // Supprimer le menu de démarrage
    startDiv.remove();

    // Initialiser les vies du joueur et démarrer le jeu
    playerLives = displayLives(3);
    gamePlaying = true;
    generateEnemies();

    // Lancer l'animation
    window.requestAnimationFrame(animate);
}
window.gameStart = gameStart;

function pauseGame() {
    //stops some functions 
    gamePlaying = false;
    stopStopwatch();
    const pauseMenu = document.createElement("div");
    pauseMenu.id = "pauseMenu";
    document.body.appendChild(pauseMenu);

    var pauseText = document.createTextNode("Game paused");
    // document.getElementById("pauseMenu").appendChild(pauseText);

    const resumeButton = document.createElement("button");
    resumeButton.innerText = "Continue";
    resumeButton.className = "button";
    resumeButton.id = "resumeButton";

    //document.getElementById("pauseMenu").appendChild(resumeButton);

    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart";
    restartButton.className = "button";
    restartButton.id = "restartButton";
    // document.getElementById("pauseMenu").appendChild(restartButton);

    document.getElementById("pauseMenu").append(pauseText, resumeButton, restartButton);
    document.body.insertBefore(pauseMenu, workspace);

    resumeButton.addEventListener("click", function () {
        resumeGame();
    })

    restartButton.addEventListener("click", function () {
        resetGame();
        resumeGame();
    });

}

function resumeGame() {
    startStopwatch();
    gamePlaying = true;
    pauseMenu.remove();
}

function resetGame() {
    location.reload();
}

function victory() {
    gamePlaying = false;
    stopStopwatch();

    const victoryMenu = document.createElement("div");
    victoryMenu.id = "victoryMenu";
    document.body.insertBefore(victoryMenu, workspace);

    var victoryText = document.createTextNode("You won !");

    const newGameButton = document.createElement("button");
    newGameButton.className = "button";
    newGameButton.innerText = "New Game ?";
    newGameButton.id = "newGameButton";

    newGameButton.addEventListener("click", function () {
        location.reload();
    });
    document.getElementById("victoryMenu").append(victoryText, newGameButton);
}

function gameOver() {
    gamePlaying = false;
    stopStopwatch();

    const gameOverMenu = document.createElement("div");
    gameOverMenu.id = "gameOverMenu";
    document.getElementById("workspace").appendChild(gameOverMenu);

    var gameOverText = document.createTextNode("You're dead !");

    const newGameButton = document.createElement("button");
    newGameButton.className = "button";
    newGameButton.innerText = "Try Again ?";
    newGameButton.id = "newGameButton";

    newGameButton.addEventListener("click", function () {
        location.reload();
    });

    document.getElementById("gameOverMenu").append(gameOverText, newGameButton);
    // pauseGame(); 
}

//asks the browser to execute a function/logic before it adds a new frame
const animate = () => {
    executeMoves();
    if (gamePlaying) {
        if (changeWay) {
            moveEnemyLeft();
        } else {
            moveEnemyRight();
        }

        if (missileFired) {
            animateMissile();
        }
        if (enemyMissiledFired) {
            animateEnemyMissile();
        }
    }
    window.requestAnimationFrame(animate);
}
// window.requestAnimationFrame(animate);
