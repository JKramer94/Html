//Finder gemmensnitet af en række tal
function average(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    //Dividere det samlet resultat med længden på det arr der er blevet brugt
    avgNum = total / arr.length;
    console.log(Math.round(avgNum));
}
//De arrays der sendes til functionen
var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); //should return 94
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should return 68