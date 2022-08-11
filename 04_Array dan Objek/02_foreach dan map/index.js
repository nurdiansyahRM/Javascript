var angka = [1,2,3,4,5,6,7,8,9];
var nama = ['nurdin','rizki','mubarokah'];
// angka.forEach(function(e){
//     console.log(e);
// });

// for(var i = 0;i<nama.length;i++){
//     console.log(nama[i]);
// }

// 1. menggunakan forEach
// nama.forEach(function(e,i){
//     console.log('index ke - '+(i)+' adalah :'+ e);
// });
// parameter i digunakan untuk index yang biasa kita gunakan pada loop for atau while

// 2. mengunkana map
// var angka2 = angka.map(function(e){
//     return e *2;
// })
// console.log(angka2.join('-'));

// 3. sort
var angka2 =[10,2,5,9,7,3,1,5,4,6,8];
angka2.sort(function(a,b){
    return a-b;
});
console.log(angka2.join('-'));
