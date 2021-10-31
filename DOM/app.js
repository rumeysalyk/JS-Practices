//window object

//console.log(this.document);

let value;

value = document;
value = document.all;
value = document.all.length;
value = document.all[5];

const elements = document.all;
for(let i= 0;i<elements.length; i++)
{
    console.log(elements[i]);
}

console.log(value);

const collections = Array.from(document.all);

collections.forEach(function(element){
    console.log(element);
});


value = document.body;
value = document.head;
value = document.location;
value = document.location.port;
value = document.location.hostname;
value = document.characterSet;
value = document.URL;


console.log(value);
