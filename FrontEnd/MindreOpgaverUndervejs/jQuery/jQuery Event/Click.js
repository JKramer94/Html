$("h1").click(function() {
    $(this).css("background", "pink");
})

$("button").click(function() {
    var text = $(this).text();
    console.log("You clicked on" + text)
})