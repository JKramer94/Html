var todo = [];
var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTodo();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    //Asking for input
    var input = prompt("What would you like to do?");
}
console.log("Ok, you did quit")

function listTodo() {
    console.log("*****************************")
    todo.forEach(function(todos, i) {
        console.log(i + 1 + ": " + todos)
    });
    console.log("*****************************")
}

function addTodo() {
    var newTodo = prompt("Enter new todo");
    //add new to array
    todo.push(newTodo);
}

function deleteTodo() {
    //Asking for index of the wanted todo delete
    var index = prompt("Enter the index of the todo to delete");
    //delete todo item
    todo.splice(index - 1, 1);
}