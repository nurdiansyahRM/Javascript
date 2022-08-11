var kesempatan = 3;
ask = true;
while(ask){

var comp = Math.floor(Math.random()*10 )+1;
console.log(comp);
var player = prompt("Tebak angka 1-10");
if(player == comp){
    alert("Jawaban anda Benar!");
    break;
}
else if(comp >0 && comp <5){
    kesempatan--;
    alert('kesempatan anda :'+kesempatan+"\n anda salah \n range 1-5 coba tebak lagi");
}else if(comp > 5 && comp <=10){
    kesempatan--;
    alert('kesempatan anda :'+kesempatan+" \n anda salah \n range 5-10 coba tebak lagi");
}else{
    kesempatan--;
    alert("anda memasukan angka yang salah");
}
    if(kesempatan ===0){
        alert ("anda kalah");
        ask = confirm ("apakah mau lagi bermain?")
    }

    
}
alert("terimakasih sudah bermain!!!")