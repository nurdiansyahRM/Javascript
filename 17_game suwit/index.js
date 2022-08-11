//menangkap pilihan player
var ask =true;
while(ask){
    var player = prompt("pilih :  gajah,semut, orang");

    //menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34){
        comp = 'gajah';
    }else if(comp > 0.34 && comp <0.64){
        comp = 'semut';
    }else{
        comp = 'orang';
    }

    var hasil = '';
    if(player == comp){
        hasil ="Seri!";
    }
    else if (player == 'gajah'){
        if(comp =='semut'){
            hasil ='Kalah!';
        }else{
            hasil ='Menang!';
        }
    }else if(player == 'semut'){
        if(comp == 'orang'){
            hasil = 'Kalah!';
        }else{
            hasil = 'Menang!';
        }
    }else if(player == 'orang'){
        if(comp == 'gajah'){
            hasil = 'Kalah!';
        }else{
            hasil ='Menang!';
        }
    }else{
        alert("anda memasukan pilihan yang salah");
    }
    alert("Player memilih : " + player + " computer memilih : "+ comp+ " hasilnya : "+ hasil);
ask = confirm("mau lanjut ?");
}
alert("terimakasih sudah bermain ");
