// function faktorial(n){
//     if(n > 1){
//         return n * faktorial(n-1);
//     }else{
//         return 1;
//     }
// }
// console.log(faktorial(1));


// function rekursif using loop

function faktorial(n){
    var hasil = 1;
    for(var i = n; i > 0;i--){
        hasil *= i;
    }
    return hasil;
}
console.log(faktorial(5));