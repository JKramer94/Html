//Colors variables
var colors = generateRandomColors(6);

//Variabler
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

var pickedColor = pickColor();

//Transfer rgb number from picked color to hedding
colorDisplay.textContent = pickedColor;

//running though all the squares
for (var i = 0; i < squares.length; i++) {
    //adding colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click event for squares
    squares[i].addEventListener("click", function() {
        //grab clicked color
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor)
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColor(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color   
        squares[i].style.backgroundColor = color;
    }

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

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

function randomColor() {
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
        //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256)
        //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";
}