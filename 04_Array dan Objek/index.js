// let myArray = ["Coklat", 45.5,22, true, "Pemrogramming"];

// for (let i =0 ; i < myArray.length;i++){
//     console.log("Index. "+ i +" value = "+myArray[i]);
// }

//menggunakan objek
// let object ={key1: "value1", key2:"value2", key3:"value3"}

// console.log("ini nilai " + object.key1)
// console.log("ini nilai " + object.key2)
// console.log("ini nilai " + object.key3)

let mahasiswa = {
    mhs1 :{
    firstname :"Nurdiansyah",
    lastname :"Mubarokah",
    age :21,
    jurusan : "informatika"
    },
    mhs2:{
        firstname :"ahmad",
        lastname :"Mubarokah",
        age :22,
        jurusan : "manajemen"
    }
    
};

console.log("Daftar mahasiswa")
console.log("nama :" + mahasiswa.mhs1.firstname + " "+ mahasiswa.mhs1.lastname);
console.log("usia :" + mahasiswa.mhs1.age);
console.log("jurusan :" + mahasiswa.mhs1.jurusan);

console.log("nama :" + mahasiswa.mhs2.firstname + " "+ mahasiswa.mhs2.lastname);
console.log("usia :" + mahasiswa.mhs2.age);
console.log("jurusan :" + mahasiswa.mhs2.jurusan);

var nama = ['nurdin','rizki','mubarokah'];
for (var i = 0; i<nama.length;i++){
    console.log(nama[i]);
}

// multiple array
my_Arr = ['nurdin',2,true,2.5,['ahmad',2,5]];

console.log(my_Arr[4][1])