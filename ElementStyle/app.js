const element = document.querySelector("#clear-todos");

//Element Özellikleri

console.log(element.id);

console.log(element.className);

console.log(element.classList);
console.log(element.classList[0]);

console.log(element.textContent); //Sadece text alanlarını döner

console.log(element.innerHTML);
console.log(element.href);

console.log(element.style);

//Style ve Element Özelliklerini Değiştirme

element.className = "btn btn-warning";
element.style.color = "#000";
element.style.marginLeft = "5px";
element.href = "https://google.com.tr";
element.target = "_blank";

element.textContent = "Silin Gitsin";

element.innerHTML = "<span style='color:green'>Silin</span>"; // textContent ile yaparsanız olmaz.spanlar de görünür

let element2 = document.querySelector("li:last-child");


element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "red";
});


// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";

// });


console.log(element2);


