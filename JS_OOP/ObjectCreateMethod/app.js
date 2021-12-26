/*
    Bir obje oluştururken eğer prototypeini başka bir objeden alacaksak object.create methodunu kullanıyoruz
*/

/*
const obj ={
    test1 = () => console.log("Test 1"),
    test2 = () => console.log("Test 2")
}

console.log(obj);

const emp = Object.create(obj);
console.log(emp); //take a look at the object on console

emp.name = "Rumeysa";
emp.age = 24;

console.log(emp);
*/

function Person(){

}

Person.prototype.test1 = () => console.log("Test1");
Person.prototype.test2 = () => console.log("Test2");

function Employee(name,age){
    this.name = name;
    this.age = 34;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = () => console.log("THis is my Test")

const emp = new Employee("Mustafa",25);

emp.test1();

console.log(emp)


