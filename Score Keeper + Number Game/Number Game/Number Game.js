var guess = 0;
//Create secretNumber
var secretNumber = 27;

//ask user for guess
var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
    alert("You got the number!!!!!!!");
} else if (guess < secretNumber) {
    alert("You guess to low")
} else {
    alert("you are too high")
}