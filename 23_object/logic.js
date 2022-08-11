//object literal

// var mhs = {
//     nama : 'NurdiansyahRM',
//     umur :21,
//     jurusan : 'Informatika',
//     Ipsemester : [3.60, 3.40, 3.50, 3.60,],
//     IPkumulatif : function(){
//         var total = 0;
//         var ips = this.Ipsemester;
//         for (var i = 0;i<ips.length;i++){
//             total += ips[i];
//         }
//         return total /= ips.length;
//     }
// }

// console.log('Nama : '+mhs.nama)
// console.log('umur : '+mhs.umur)
// console.log('jurusan : '+mhs.jurusan)
// console.log('IPsemester : '+mhs.Ipsemester.join('-'));
// console.log('Ip kumulatif : '+ mhs.IPkumulatif());
 

// membuat function declaration

function buatObjectmhs(nama, npm, email, jurusan){
    var mhs ={};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
    
}
var mhs1 = buatObjectmhs('rizki','19111013','rizki@gmail.com','informatika');
var mhs2 = buatObjectmhs('dodo','19111011','dodo@gmail.com','informatika');


//menggunakan constructor
function Mahasiswa(nama, npm, email, jurusan){
    this.nama = nama;
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa('Nurdiansyah','19111012','nurdiansyah.rm.@unibi.ac.id','Informatika'); 
