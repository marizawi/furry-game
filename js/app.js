import {Game} from "./game.js";

let newGame = new Game();
newGame.showFurry();
newGame.showBone();
newGame.startGame();
document.addEventListener("keydown", (event) => {
    newGame.turnFurry(event);
});












