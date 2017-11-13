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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var newGame = new _game.Game();
newGame.showFurry();
newGame.showBone();
newGame.startGame();
document.addEventListener("keydown", function (event) {
    newGame.turnFurry(event);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _furry = __webpack_require__(2);

var _bone = __webpack_require__(3);

var Game = function Game() {
    var _this = this;

    this.board = document.querySelectorAll("section#board div");
    this.furry = new _furry.Furry();
    this.bone = new _bone.Bone();
    this.score = 0;
    this.index = function (x, y) {
        return x + y * 10;
    };
    this.showFurry = function () {
        _this.hideVisibleFurry();
        _this.board[_this.index(_this.furry.x, _this.furry.y)].classList.add('furry');
    };
    this.hideVisibleFurry = function () {
        var furryClass = document.querySelector(".furry");
        if (furryClass !== null) {
            furryClass.classList.remove("furry");
        }
    };
    this.showBone = function () {
        _this.board[_this.index(_this.bone.x, _this.bone.y)].classList.add('bone');
    };
    this.moveFurry = function () {
        if (_this.furry.direction === "right") {
            _this.furry.x += 1;
        } else if (_this.furry.direction === "left") {
            _this.furry.x -= 1;
        } else if (_this.furry.direction === "bottom") {
            _this.furry.y += 1;
        } else if (_this.furry.direction === "top") {
            _this.furry.y -= 1;
        } else {
            console.log("Wrong direction");
        }
        _this.gameOver();
        _this.showFurry();
        _this.checkBoneCollision();
    };
    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                _this.furry.direction = "left";
                break;
            case 38:
                _this.furry.direction = "top";
                break;
            case 39:
                _this.furry.direction = "right";
                break;
            case 40:
                _this.furry.direction = "bottom";
                break;
        }
    };
    this.checkBoneCollision = function () {
        if (_this.furry.x === _this.bone.x && _this.furry.y === _this.bone.y) {
            document.getElementById("woof").play();
            _this.board[_this.index(_this.bone.x, _this.bone.y)].classList.remove('bone');
            _this.score += 1;
            var scoreEl = document.querySelector("#score strong");
            scoreEl.innerText = _this.score;
            _this.bone = new _bone.Bone();
            _this.showBone();
        }
    };
    this.gameOver = function () {
        if (_this.furry.x < 0 || _this.furry.x > 9 || _this.furry.y < 0 || _this.furry.y > 9) {
            document.getElementById("gameover").play();
            clearInterval(_this.idSetInterval);
            _this.hideVisibleFurry();
            document.getElementById("over").classList.remove("invisible");
            document.querySelector("#over strong").innerText = _this.score;
        }
    };
    this.startGame = function () {
        _this.idSetInterval = setInterval(function () {
            _this.moveFurry();
        }, 250);
    };
};

exports.Game = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Furry = function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
};

exports.Furry = Furry;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Bone = function Bone() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
};

exports.Bone = Bone;

/***/ })
/******/ ]);