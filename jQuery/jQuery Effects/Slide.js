$("#slideDown").on("click", function() {
    $("h1").slideDown();
})
$("#slideUp").on("click", function() {
    $("h1").slideup();
})
$("#slide").on("click", function() {
    $("h1").slideToggle(1000, function() {
        //det er normalt man fjerner dem helt efter de er væk
        // $(this).remove();
    });
})