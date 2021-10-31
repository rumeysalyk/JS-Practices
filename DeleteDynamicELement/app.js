const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");


//Remove Metodu
//to dos[1].remove();

// Remove Child

// to doList.removeChild(todoList.lastElementChild); 
todoList.removeChild(todos[3]);



console.log(todos);
console.log(todoList);