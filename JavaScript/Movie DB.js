var movieDB = [{
        title: "Frozen",
        stars: "5",
        comment: "Really fun and a movie that you can enjoy with your family",
        seen: "Yes"
    },
    {
        title: "Mad Max Fury Road",
        stars: "3",
        comment: "It got alot of action buy not that fun to watch",
        seen: "Yes"
    },
    {
        title: "Fast and the Furious 8",
        stars: "4.5",
        comment: "Haven't seen it yet",
        seen: "No"
    },
    {
        title: "Harry Potter",
        stars: "5",
        comment: "The movies are really good the are fun and it's fun to watch if you got alot of time free",
        seen: "Yes"
    }
]

function statics() {
    for (var i = 0; i < movieDB.length; i++) {
        if (movieDB[i].seen. == "Yes") {
            console.log("You have watched \"" + movieDB[i].title + "\" - " + movieDB[i].stars + " stars")
        } else {
            console.log("You have not seen \"" + movieDB[i].title + "\" - " + movieDB[i].stars + " stars")
        }
    }
}