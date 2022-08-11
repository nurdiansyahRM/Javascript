var Myarr =['nurdin','rizki','mubarokah'];

// method pada array 1. join
// merubah isi array menjadi string
console.log(Myarr.join('-'))

// method 2. push & join
console.log("using method push")
Myarr.push('sudrajat');
for(var i = 0;i<Myarr.length;i++){
    console.log("index ke- "+(i+1) +' '+Myarr[i]);
}
//fungsi pop menghilangkan element terakhir pada array
console.log('\n')
console.log("using method pop")
Myarr.pop();
for(var i = 0;i<Myarr.length;i++){
    console.log("index ke- "+(i+1) +' '+Myarr[i]);
}
// method unshift dan shift
// Element pertama

console.log('\n')
console.log("using method unshift")
Myarr.unshift('dody');
for(var i = 0;i<Myarr.length;i++){
    console.log("index ke- "+(i+1) +' '+Myarr[i]);
}
console.log('\n')
console.log("using method shift")
    Myarr.shift();
    for(var i = 0;i<Myarr.length;i++){
        console.log("index ke- "+(i+1) +' '+Myarr[i]);
    }
    
    console.log('\n');
    console.log("using method splice")
    // Myarr.slice(indexawal, mau dihapus berapa, elemen baru n, elemen baru-1)
    Myarr.splice(2, 0,'Ahmad');
    for(var i = 0;i<Myarr.length;i++){
        console.log("index ke- "+(i+1) +' '+Myarr[i]);
    }
    console.log('\n');
    console.log("using method slice");
    var arr = ['fitri','mubarok','rizki','nurdin','subagja'];
    var arr1 = arr.slice(1,3);
    console.log(arr1.join('-'));

    
    