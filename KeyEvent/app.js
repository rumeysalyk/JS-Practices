//Klavye Eventleri

//keypress : sadece sayı ve harf tuşlarında görülür
// document.addEventListener("keypress",run);//herhangi bir sayı veya rakama keyboard üzerinden bastığımızda keypress event oluşuyor

// function run(e){
//     console.log(e.which);
//     console.log(e.key);
// }

//keydown
// document.addEventListener("keydown",run);//herhangi bir sayı veya rakama keyboard üzerinden bastığımızda keypress event oluşuyor

// function run(e){
//     console.log(e.which);
//     console.log(e.key);
// }

//keyup
// document.addEventListener("keyup",run);//herhangi bir sayı veya rakama keyboard üzerinden bastığımızda keypress event oluşuyor

// function run(e){
//     //console.log(e.which);
//     console.log(e.key);
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changetext);

function changetext(e){
    header.textContent = e.target.value;
    console.log(e.target.value);
}

