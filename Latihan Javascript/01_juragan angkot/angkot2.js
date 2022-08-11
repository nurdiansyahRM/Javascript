let noAngkot = 1;
let jmlAngkot = 10;
while(noAngkot <= jmlAngkot){
    if(noAngkot <= 4 || noAngkot === 6){
        console.log('Angkot No. '+ noAngkot+ ' beroperasi dengan baik.');
    }else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log('Angkot No. '+ noAngkot+ ' sedang Lembur');
    }else{
        console.log('Angkot No. '+ noAngkot+ ' sedang tidak beroperasi');

    } 
    noAngkot++;
}
