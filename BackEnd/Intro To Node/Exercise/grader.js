//Finder gemmensnitet af en række tal
function average(score) {
    var total = 0;
    for (var i = 0; i < score.length; i++) {
        total += score[i];
    }
    //Dividere det samlet resultat med længden på det arr der er blevet brugt
    avgNum = total / score.length;
    return Math.round(avgNum);
}
//De arrays der sendes til functionen
var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores1)); //should return 94
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68