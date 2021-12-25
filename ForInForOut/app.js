const person ={
    name:"Rumeysa Layık",
    age:24,
    salary:3000
};

const langs = ["Python","C++","Java","Php"]

const name = "İbrahim";

for(let prop in person){
    console.log(prop,person[prop]);
}


for(let index in langs)
{
    console.log(index,langs[index]);
}

for(let index in name){
    console.log(index,name[index]); 
}

//For of : objelerin üzerinde dolanamıyoruz, sadece arraye benzeyen veri tipleri için kullanılıyor

/*
for (let index of person){
    console.log(value); //error
}
*/

for(let index of langs){
    console.log(index,langs[index]);
}



