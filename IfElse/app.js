// === operatörü hem data type hem de değer olarak kıyas yapıyor.

if(2=="2")
{
    console.log("esit");//normalde eşit olmaması lazım ancak 2 sayısı stringe çevriliyor ondan sonra kıyas yapılıyor ancak üstte 2 sayı olarak bakılıyor
}

const user = "mmc";

if(user=="mmc")
{
    console.log("degerler esittir");
}
else if(user=="mm"){
    console.log("süreç 2");   
}
else{
    console.log("not eşit");
}


const number =100;
console.log(number===100 ? "Sayi 100" : "Sayi 100 değil");

const process=6;

switch(process){
    case 1: 
        console.log("1");
        break;
    case 2: 
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    default:
        console.log("default");

    

}
