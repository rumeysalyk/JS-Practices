//Primitive Veri Tipleri
var a = 10;
var b=90.5,c;

console.log(a,b,c);
console.log(typeof a);
console.log(typeof b);


var x = "Rumeysa";
console.log(x);
console.log(typeof x);

var y = true;
console.log(y);
console.log(typeof y);

//Referans veri tipleri
//null boş bir değerdir
//typeini object olarak yazıyor ancak bu jsdeki bir bugdır.t yi boş değeri gösteren bir pointer gibi düşünüyor.Referans tiplerinin hepsi de birer objectdir

var t = null;
console.log(t);
console.log(typeof t)

var numbers = [1,2,3,4,5];

console.log(typeof numbers)
console.log(numbers);
console.log(numbers[0]);


var person = {
    name:"Rumeysa Layık",
    age:25
}

console.log(person);
console.log(typeof person);

var date = new Date();
console.log(date);
console.log(typeof date);

var merhaba = function()
{
    console.log("Merhaba");
}

console.log(merhaba);
console.log(typeof merhaba);


// var, const ve let farkı

var m;
m=45;
console.log(m);
var m; //var bu şekilde daha önce tanımlanmış bir değişkeni tekrar tanımlamaya izin verir
m=75;
console.log(m);

let n;
n=45;
console.log(n);
//let a; //let bu şekilde daha önce tanımlanmış bir değişkeni tekrar tanımlamaya izin vermez
n=45; //Ancak tekrar tanımlamadan yeni bir atama yapılabilir
console.log(n);

//const a;//const değişkenlerin ilk değeri her zaman tanımlarırken atanmalıdır
const k =89;
//k=78;//Tekrar tanımlamaya izin vermez
console.log(k);


//Example
var t =455;
var h = t;
console.log(t,h);
t=79;
console.log(t,h);


//Ex2: bu örneğe dikkat
// var first =[4,56,6,7];//first burada bir referanstır yani arrayın başladığı yeri gösteren bir referanstır
// var second = first; // second da first in gösterdiği yeri göstersin demiş olduk
// console.log(first);
// first = [7,8,9];
// console.log(first);

// first.push(23);
// console.log(second);

const q = [4,56,6,7];
console.log(q);

//q=[5,8,9,6,7];//Buna const old. için izin vermez
q.push(9);//Burada referans edilen yer, adres değişmediği için array üzerinde değişiklik yapabiliyoruz
console.log(q);

