/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(1);


let newGame = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* Game */]();
newGame.showFurry();
newGame.showBone();
newGame.startGame();
document.addEventListener("keydown", (event) => {
    newGame.turnFurry(event);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__furry_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bone_js__ = __webpack_require__(3);



let Game = function () {
    this.board = document.querySelectorAll("section#board div");
    this.furry = new __WEBPACK_IMPORTED_MODULE_0__furry_js__["a" /* Furry */]();
    this.bone = new __WEBPACK_IMPORTED_MODULE_1__bone_js__["a" /* Bone */]();
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
        this.showFurry();
        this.gameOver();
        this.checkBoneCollision();
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
            this.bone = new __WEBPACK_IMPORTED_MODULE_1__bone_js__["a" /* Bone */]();
            this.showBone();
        }
    };
    this.gameOver = () => {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            document.getElementById("gameover").play();
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            document.getElementById("over").classList.remove("invisible");
            document.querySelector("#over strong").innerText = this.score;
        }
    };
    this.startGame = () => {
        this.idSetInterval = setInterval(() => {
            this.moveFurry();
        }, 250);
    }
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Furry; });
var Furry = function () {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bone; });
let Bone = function () {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
};



/***/ })
/******/ ]);