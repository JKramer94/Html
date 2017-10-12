//Lav en function som tager 2 agumenter (string og nummer) så printer den teksten ud x antal gange
function echo(str, num) {
    for (var i = 0; i < num; i++) {
        console.log(str);
    }
}

console.log(echo("Echo!!!", 10));
console.log(echo("Tater Tots", 3));