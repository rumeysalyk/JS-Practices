const filter = document.getElementById("filter");
/*
    DOM Content Load eventi sayfadaki tüm elementler oluştuktan sonra çalışan bir event
//     Sıkça kullanıcaz
// */ 
// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Sayfa yüklendi");
// }

//Focus Event
filter.addEventListener("focus",run);

//blur: focusun tam tersi : odaktan çıktığımızda çalışan event
filter.addEventListener("blur",run);

//copy: kopyalama işlemi yapıldığında çalışır
filter.addEventListener("copy",run);

//paste : yapıştırma işleminden sonra oluşan bir event
filter.addEventListener("paste",run);

//cut : kesme işlemi yapıldığında oluşan event
filter.addEventListener("cut",run);




function run(e){
    console.log(e.type);
}
