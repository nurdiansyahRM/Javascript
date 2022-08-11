// 1. filter 
// mencari nilai pada array dan mengembalikan pada array

var angka =[10,2,5,9,7,3,1,5,4,6,8];

// var angka2 = angka.filter(function(x){
//     return x > 5;
// });
// angka2.sort(function(a,b){
//     return a-b;
// });
// console.log(angka2.join('-'));

var angka2 = angka.find(function(x){
    return x > 1;
})
console.log(angka2);