//Yeni element Oluşturma

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.target = "_blank";
newLink.href = "https://www.google.com.tr";

//text contentini yazarken bir sorun oluyor.
//Yani direkt aşağıdaki code satırını yazdığımızda tüm cardboynin içindeki herşeyi silerek "Farklı sayfaya gidiniz yazısı oluyor.";

//newLink.textContent = "Farklı sayfaya gidiniz";

//Bunun yerine text nodu ekleyeceğiz.TExt Childi oluşturmak gibi düşün

// const text = document.createTextNode("Nnonono");
// cardbody.appendChild(text);
// console.log(cardbody);

// console.log(newLink);


//Newlink oluşturma işlemlerine kaldığımız yerden devam ediyoruz

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardbody.appendChild(newLink);
console.log(newLink);