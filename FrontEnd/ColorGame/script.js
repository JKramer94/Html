//variables
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

resetButton.addEventListener("click", function() {
    reset()
});

function init() {
    setupModeButton();
    setupSquares();
    reset()
}

function setupModeButton() {
    //mode buttons
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            //Fjerne sværhedsgraden på den ene og sætter den over til den anden
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //Dette er et if statement 
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    //running though all the squares
    for (var i = 0; i < squares.length; i++) {
        //add click event for squares
        squares[i].addEventListener("click", function() {
            //grab clicked color
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                //changes h1 background to correct color
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    //generate random color & pick a new random color from array
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    //change h1 to match picked color
    colorDisplay.textContent = pickedColor;
    //reset button text & reset and h1 color
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}
//changes all squares to the correct color
function changeColor(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color   
        squares[i].style.backgroundColor = color;
    }

}
//pick a random color you have to guess
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//generate random colors for the game
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors arr
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that arr
    return arr;
}
//generates a random rgb color
function randomColor() {
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}