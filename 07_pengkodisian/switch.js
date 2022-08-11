var item = prompt("masukan makanan yang ada di menu \n 1. nasi \n 2.daging \n 3. ikan");
var harga = 0;
var banyak = 0;
switch(item){
    case 'nasi':
        harga = 5000;
        banyak = parseInt(prompt("mau berapa item : "));
            if (banyak === 1){
            }else if(banyak === 2 ){
                harga = 5000 * banyak;
            }else if (banyak === 3){
                harga = 5000 * banyak;
            }
        alert("anda memilih makanan nasi dengan "+banyak+" item!"+ " dengan harga Rp. "+ harga);
        break;

    case 'daging':
        harga == 6000;
        banyak = parseInt(prompt("mau berapa item : "));
            if (banyak === 1){
            }else if(banyak === 2 ){
                harga = 6000 * banyak;
            }else if (banyak === 3){
                harga = 6000 * banyak;
            }
        alert("anda memilih makanan daging dengan "+banyak+" item!"+ " dengan harga Rp. "+ harga);
        break;

    case 'ikan':
        harga = 7000;
        banyak = parseInt(prompt("mau berapa item : "));
            if (banyak === 1){
            }else if(banyak === 2 ){
                harga = 7000 * banyak;
            }else if (banyak === 3){
                harga = 7000 * banyak;
            }
        alert("anda memilih makanan ikan dengan "+banyak+" item!"+ " dengan harga Rp. "+ harga);
        break;
    default:
        alert("item tidak tersedia!!!!!!!");
        break;
    }