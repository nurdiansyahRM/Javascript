let Mydata = {};
alert("form data Pelamar kerja !");
let firstname = prompt("masukan nama pertama anda : ");
let lastname = prompt("masukan nama terakhir anda : ");
let Pendidikan = prompt("masukan pendidiakn terakhir  anda : ");
let bidang = prompt("Bidang keahlian : ");
let nohp = prompt("masukan no HP:");
let Email = prompt("masukan no Email:");
let domisi  = prompt("masukan domisi anda sekarang :");

let kompiramasi = confirm("kamu yakin ?");

    if (kompiramasi === true){
        alert("data tersimpan!");
        Mydata = [firstname,lastname,Pendidikan,bidang,nohp,Email,domisi];
    }else{
        alert("Coba cek kembali data anda");
    }

alert("Nama : "+ Mydata[0]+ " " +Mydata[1]);
alert("Pendidikan: "+Mydata[2]);
alert("Bidang : "+Mydata[3]);
alert("NO HP : " + Mydata[4]);
alert("Email : " + Mydata[5]);
alert("Domisi : "+ Mydata[6]);

alert("terima kasih sudah mengisi data")

let data = {
    nama : firstname,lastname,
    studi:Pendidikan,
    keahlian :bidang,
    hp : nohp,
    email:Email,
    tinggal:domisi
};
console.log(data.nama);
console.log(data.studi);
console.log(data.keahlian);
console.log(data.tinggal);
console.log(data.hp);
console.log(data.email);
