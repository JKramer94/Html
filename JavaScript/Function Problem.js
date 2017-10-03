function isEven(x) {
    return x % 2 === 0;
}

function factorial(x) {
    if (num === 0) return 1;
    for (i = x - 1; i > 0; i--) {
        x *= i;
    }

    return x;
}

function kebabToSnake(x) {
    newX = x.replace(/-/g, "_")
    return newX;
}

num = Number(prompt("Type in a number"));

console.log(isEven(num));
console.log(factorial(num));
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));