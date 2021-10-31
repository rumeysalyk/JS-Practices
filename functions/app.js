//fonksiyon tanımlama

function merhaba(name="Furkan",age="14") //varsayılan değerler veriliyor
{
    console.log(`Name: ${name} Yaş: ${age}`);
}

merhaba("Rumeysa",25);//function calling

merhaba();
//*************************************************** */
function square(a)
{
    return a*a*a;
}

console.log(square(5));

//function expression
const ex = function(){
    console.log("Hello")
}

ex();

//********************************** Immediately Invoked Function Expression: Tanımlandığı yerde çalışan fonksiyonlara verilen isim */
(function(name){
    console.log(name);
})("Rumeysaaaaa");

const database = {
    host: "localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde edildi");
    },
    update:function(id){
        console.log(`Id:${id} güncellendi`)
    }
}

console.log(database.host);
database.add();
database.get();
database.update(3);
