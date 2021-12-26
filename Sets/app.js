// Setler arraylerden farklı olarak aynı değeri iki defa tutmuyor

const mySet = new Set();
mySet.add(100);
mySet.add(100);//Error vermez ancak yine de ekleme yapmaz
mySet.add(3.14);
mySet.add("Mustafa");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2,c:3});

const mySet2 = new Set([1,2,3],"Rumeysa",145);

console.log(mySet);
console.log(mySet2);

console.log(mySet.size);

//Delete Methodu 
mySet.delete(3.14);
console.log(mySet);

//Has Methodu: Girilen parametre set içerisinde var mı yok mu onu kontrol eder
console.log(mySet.has("Rumeysa"));//false döner
console.log(mySet.has(100));//false döner
console.log(mySet.has([1,2,3]));//arrayler bir referans tip olduğu için içerik aynı olsa da false döner.

//Elemanlar üzerinde gezinme
mySet.forEach(function(value){
    console.log(value);
})

for(var x of mySet)
{
    console.log(x);
}


//Setten array oluşturma

const array = Array.from(mySet);
console.log(array);




