/*
    JS de class yapısı yoktur.ES6 ile class yazıyprmuşuz gibi düşünsek de aslında arka planda bu yapılar prototype a dönüştürülürler.
    JS 'de objenin içerisnde bir de prototype denilen bir özellik daha yer alıyor
*/

const object = new Object();
const object2 = new Object();

object.name = "Rumeysa";
console.log(object);

// *********

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = ()=>console.log("Bilgiler gösteriliyor");
    this.toShowDetails = () =>console.log("Name: " + this.name + "Age:" + this.age);
}

const emp1 = new Employee("Mustafa",14);
console.log(emp1);

// Normalde employee objesinin içerisinde toString methodu yok ancak bu objenin içerisinde kalıtım aldığı Obje sınıfında yer alıyor.
console.log(emp1.toString()); 


/*
    Önemli!!
    * toShowInfos fonksiyonunu prototype içerisinde değil de bu şekilde yazarsak büyük sistemlerde bu memoryde çok fazla yer kaplayacaktır
    * Bu yüzden constructor arayıcılığıyla prototypea yzmak bize avantaj sağlar
*/

Employee.prototype.showNewInfos = function(){
    console.log("İsim: " + this.name + "\n" +"Yaş: " + this.age);
}

emp1.showNewInfos();


