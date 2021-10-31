let value;

value = document;

//Scriptleri alma

value = document.scripts;

value = document.scripts[0];

//Linkler

value = document.links;
value = document.links[0];
value = document.links[0].getAttribute("class");
value = document.links[0].getAttribute("href");

value = document.links[0].classList;
value = document.links[0].className;

//formlar

value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"];
value = document.forms[0].name;
value = document.forms[0].getAttribute("id");
value = document.forms[0].id;
value = document.forms[0].method;

console.log(value);
