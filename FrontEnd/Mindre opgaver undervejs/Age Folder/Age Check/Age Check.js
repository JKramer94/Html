var age = Number(prompt("Type in your age"));

if (age < 0) {
    console.log("Come back once you're out of the womb")
} else if (age === 21) {
    console.log("Happy 21st birthday!!")
} else if (age % Math.sqrt(age) === 0) {
    console.log("you got the perfect age ;)")
} else if (age % 2 !== 0) {
    console.log("your age is odd!")
}