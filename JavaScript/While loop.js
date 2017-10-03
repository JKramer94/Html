var num1 = -10;
var num2 = 10;
var num3 = 300;
var num4 = 5;

while (num1 <= 19) {
    console.log(num1);
    num1++;
}

console.log("-------------------")
while (num2 <= 40) {
    if (num2 % 2 === 0) {
        console.log(num2);
    }
    num2 += 1;
}

console.log("-------------------")
while (num3 <= 333) {
    if (num3 % 2 !== 0) {
        console.log(num3)
    }
    num3++;
}

console.log("-------------------")
while (num4 <= 50) {
    if (num4 % 5 == 0 && num4 % 3 == 0) {
        console.log(num4);
    }
    num4++;
}