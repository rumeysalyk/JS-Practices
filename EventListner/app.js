const filterInput = document.getElementById("filter");

//console.log(filterInput);

//1st way
// filterInput.onfocus = function(){ //onfocus property
//     console.log("ses");
// }

//2nd way
// filterInput.addEventListener("focus",function(e){
//     console.log("Ses");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// });

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Event");
    e.preventDefault();
}

