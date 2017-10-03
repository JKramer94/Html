//------------------IsUniform----------------------------
function trueFalse(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}
//------------------ReverseArray------------------------
//Dette er en måde at lave den omvent på
function reverseArray(arr) {
    console.log(arr.reverse());
}
//Dette er hans måde at gøre det på
function reverseArray2(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//------------------SumArray-----------------------------
function sumArray(arr) {
    var resault = 0;
    for (var i = 0; i < arr.length; i++) {
        resault += arr[i];
    }
    return resault
}
//-----------------MaxArray-----------------------------
//Printer det højeste tal ud
function maxArray(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//*** forEach toturial ***

nums.forEach(function(element) {
    console.log(element)
});

Array.prototype.forEach = function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}