//maps: key-value relation 

let myMap = new Map();

console.log(myMap);

const key1 = "Rumeysa";
const key2 = {a:10, b:20};
const key3 = () => 2;

//set 
myMap.set(key1,"String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3,"Function Dependency");

//get 
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

//map size
console.log(myMap.size);

const cities = new Map();

cities.set("Ankara",5);
cities.set("Bursa",45);
cities.set("Adana",7);

//For Each
cities.forEach(function(value,key){
    console.log(key,value);
});

//for of ile gezinme

//dikkat burda array gibi dönüyor
for(let key of cities)
{
    console.log(key);
}


for(let [key,value] of cities)
{
    console.log(key,value);
}


// ayrı ayrı nasıl alabiliriz?

for(let value of cities.keys()){
    console.log(value);
}


for(let value of cities.values()){
    console.log(value);
}


//arrayden map oluşturma 
const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);
console.log(lastMap);

//mapden array oluşturma
const arr = Array.from(cities);
//[["Almanya",7],["Ankara",6],["Adana",1]];
console.log(array);




