let value;

const value1 = 10;
const value2 = 3;

value = value1 / value2; //C deki gibi 3 demiyor.Gerçek bölüm değerini veriyor

console.log(value);

//Math objesi
value = Math.PI;
value = Math.E;

value = Math.round(3.6);//4
value = Math.round(3.5);//4
value = Math.round(3.2);//4

//tavandaki integere tamamlar
value = Math.ceil(2.5);//3
value = Math.ceil(9.7);//10
value = Math.ceil(3.2);//4

console.log(value);

//tabandaki integere tamamlar
value = Math.floor(2.5);//3
value = Math.floor(9.7);//10
value = Math.floor(3.2);//4

value = Math.sqrt(16);
value = Math.abs(-69);
value = Math.pow(4,5);

value = Math.max(10,-89,47,1555);
value = Math.min(10,-89,47,1555);

//***************************************************Önemli****************************** */

value = Math.random(); // 0-1 arasında bir random sayı üretiyor
value = Math.random()*20 //0-20 not:0 dahil 20 dahil değil
value = Math.floor(Math.random()*20+1) //0-20 not:0 dahil 20 dahil değil olmaz +1 eklemezsem



console.log(value);

