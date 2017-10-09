// logger alle inputs fra tasterne man trykker på
$("input").keypress(function() {
    console.log("You pressed a key");
})

//gør kun noget når man trykker på enter
$("input").keypress(function(event) {
    if (event.which === 13) {
        alert("you hit enter");
    }
})