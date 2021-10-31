let element;
//Element Idye göre Seçme
element = document.getElementById("todo-form");

//Element Classa göre Seçme
element = document.getElementsByClassName("list-group-item")[0];

//Element Tag'e göre Seçme 
element = document.getElementsByTagName("div");

//Üçünün yaptığı işlemin hepsini tek seferde yapabiliyoruz
//Query Selector - CSS Selector - Tek bir Elementi seçiyor(yani gördüğü ilk elementi)

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

//class seç 
element = document.querySelector(".list-group-item");

element = document.querySelector("li"); //ilk li elementini çekip alıyor
element = document.querySelector("div");

//Tüm elementleri seç*****************************Bu Önemli********************************

element = document.querySelectorAll("li"); //node list döner

element.forEach(function(el){
    console.log(el);
});


console.log(element);