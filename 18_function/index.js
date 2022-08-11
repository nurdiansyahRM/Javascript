// function jumlah_volume_2_kubus(sisi_a,sisi_b){
//     var volume_a = sisi_a * sisi_a *sisi_a;
//     var volume_b = sisi_b * sisi_b *sisi_b;
//     var hasil = volume_a + volume_b;
//     return hasil;
// }

// var sisi_a = parseInt(prompt("masukan sisi kubus a : "));
// var sisi_b = parseInt(prompt("masukan sisi kubus b : "));

// console.log(jumlah_volume_2_kubus(sisi_a,sisi_b));


// paramater argumen 

// function tambah(a,b){
//     return a+b;
// }
// function kali(a,b){
//     return a*b;
// }

// var a = parseInt(prompt("masukan angka a:"));
// var b = parseInt(prompt("masukan angka b:"));
// var c = parseInt(prompt("masukan angka c:"));
// var d = parseInt(prompt("masukan angka d:"));

// hasil = kali(tambah(a,b), tambah(c,d));
// alert("hasil kali adalah :"+ hasil);


//sudo argumen

function tambah(){
    var hasil = 0;
    for(var i = 0;i<arguments.length;i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4);
console.log(coba);