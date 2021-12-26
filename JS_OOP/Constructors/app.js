console.log(this); //this global scopedaki window objesini gösteriyor

function Employee(){ //Yapıcı fonk.

    this.name = "Rumeysa";
}

//obje üretme
const emp1 = new Employee();

console.log(emp1);


function Student(name,age,university){
    this.name = name;
    this.age = age;
    this.university = university;

    this.showInfos = function(){
        console.log(this.name,this.age,this.university);
    }

    console.log(this); // buradaki this Student objesini gösterir.Scope kapandığında ise window objesini gösterir
}

const s1 = new Student("Rumeysa",24,"AU");
const s2 = new Student("Ali",45,"SU");

s1.showInfos();

//console.log(s1,s2)