import {Game} from "./game.js";

let newGame = new Game();
newGame.showBone();
newGame.startGame();
document.addEventListener("keydown", (event) => {
    newGame.turnFurry(event);
});
