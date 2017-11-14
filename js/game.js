import {Furry} from "./furry.js";
import {Bone} from "./bone.js";

let Game = function () {
    this.board = document.querySelectorAll("section#board div");
    this.furry = new Furry();
    this.bone = new Bone();
    this.score = 0;
    this.index = (x, y) => {
        return x + (y * 10);
    };
    this.showFurry = () => {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };
    this.hideVisibleFurry = () => {
        let furryClass = document.querySelector(".furry");
        if (furryClass !== null) {
            furryClass.classList.remove("furry");
        }
    };
    this.showBone = () => {
        this.board[this.index(this.bone.x, this.bone.y)].classList.add('bone');
    };
    this.moveFurry = () => {
        if (this.furry.direction === "right") {
            this.furry.x += 1;
        } else if (this.furry.direction === "left") {
            this.furry.x -= 1;
        } else if (this.furry.direction === "bottom") {
            this.furry.y += 1;
        } else if (this.furry.direction === "top") {
            this.furry.y -= 1;
        } else {
            console.log("Wrong direction");
        }
        this.gameOver();
        this.checkBoneCollision();
        this.showFurry();
    };
    this.turnFurry = event => {
        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "top";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "bottom";
                break;
        }
    };
    this.checkBoneCollision = () => {
        if (this.furry.x === this.bone.x && this.furry.y === this.bone.y) {
            document.getElementById("woof").play();
            this.board[this.index(this.bone.x, this.bone.y)].classList.remove('bone');
            this.score += 1;
            let scoreEl = document.querySelector("#score strong");
            scoreEl.innerText = this.score;
            this.bone = new Bone();
            this.showBone();
        }
    };
    this.gameOver = () => {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            document.getElementById("gameover").play();
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            document.getElementById("over").classList.remove("invisible");
            document.querySelector("#over strong").innerText = (this.score).toString();
        }
    };
    this.startGame = () => {
        this.idSetInterval = setInterval(() => {
            this.moveFurry();
        }, 250);
    }
};

export {Game};