/*
    Event Bubbling : içten dışarıya yayılarak tetiklenme:
    Burada card body'e tıkladığımızda card bodynin parentları cardrow ve container de tetiklenecek
*/



document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card Body");
});

document.querySelector(".container").addEventListener("click",function(){
    console.log("Container");
});

document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card Row");
});

/*
    Event Capturing - Delegation
    Spesifik element seçimi konusunda işimize yarar
*/

const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("click",run);

function run(e){
    if(e.target.className === "fa fa-remove")
        console.log("Delete Operation");
    if(e.target.id === "filter")
        console.log("Filtering");
    if(e.target.className === "clear-todos")
        console.log("Delete all tasks");
}
