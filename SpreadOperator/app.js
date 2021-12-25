//Spread Operator

const langs = ["Python","C++","Java"]

console.log(langs);
console.log(langs[0],langs[1],langs[2]);
console.log(...langs);

//Ex:2
const langs2 = ["js","c","scala",...langs];;

console.log(langs2);

//Ex3

const numbers = [1,2,3,4,5,6,7,8,9];

const [a,b,...numbers2] = numbers;

console.log(a,b); //1,2
console.log(numbers2); //[3, 4, 5, 6, 7, 8, 9]

//Ex4

const addNumbers = (a,b,c) => console.log(a+b+c);
//ikincisi daha pratik 
const ns = [100,200,300];
addNumbers(...numbers);







