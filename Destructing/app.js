//Destructing: Arraylerin veya objelerin içinden değerleri almanın kısa bir yolu

/*
//1
//without distructing
let number1, number2;

arr = [100,200,300,400];

number1 = arr[0];
number2 = arr[2];

console.log(number1,number2);

*/


//2
/*
let number1, number2;

arr = [100,200,300,400];

[number1,number2] = arr; //otomatik olarak 100 number1 ve 200 number2ye atılıyor

const [number1,number2] = arr; //en kısa yolu

//Object Destructing
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40
};
*/
//const{number1,number2} = numbers; // objelerde durum farklı çalışıyor.Atama yapabilmeesi için objelerin keyleri verilmeli

//const {a,b} = numbers; //yeniden isimlendirme yapmak istiyorsak aşağıdaki gibi : ile yeni ismi tanımlayabiliriz 
//console.log(a,b);


//const {a:number1,b:number2} = numbers;
//console.log(number1,number2);

//Function Destructing
/*
const getLangs = () => ["Python","Java","Python"]

const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3); 
*/
// Obje

const person = {
    name:"Rumeysa",
    year: 1997,
    salary: 8988,
    showInfo: () => console.log("Bilgiler gösteriliyor")
}

const {name:isim, year:yil, salary:maas,showInfo:BilgileriGoster} = person;
console.log(isim,yil,maas);

BilgileriGoster();



