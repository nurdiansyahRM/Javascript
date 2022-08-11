function Penglolaan_angkot(sopir, tryek, kas, penumpang){
    this.sopir = sopir;
    this.tryek = tryek;
    this.kas = kas;
    this.penumpang = penumpang;

    this.penumpangNaik = function(nama){
        if(this.penumpang.length ===0){
        this.penumpang.push(nama);
            return this.penumpang;
        }else{
            for( var i = 0;i<penumpang.length;i++){
                if(this.penumpang[i] == undefined){
                    this.penumpang[i] = (nama);
                    return this.penumpang;
                }else if(this.penumpang[i] == nama){
                    alert (nama + 'sudah ada didalam angkot');
                    return this.penumpang;
                }else if(i == this.penumpang.length -1){
                    this.penumpang.push(nama);
                    return this.penumpang;
                }
            }
        } 
    }
    this.penumpangTurun = function(nama, bayar){
        if(this.penumpang.length === 0){
            alert ('angkot masih kosong');
            return false;
        }  
         for (var i = 0;i <penumpang.length;i++){
            if (this.penumpang[i] == nama){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }else if(i == this.penumpang.length -1){
                console.log(nama + ' tidak ada didalam angkot');
            }
        }
        return this.penumpang;
    }
}
//inisialisasi object
var angkot1 = new Penglolaan_angkot('jaja',['cicaheum','cibiru'],0,[]);
var angkot2 = new Penglolaan_angkot('cruse',['antapani','ciroyom'],0,[]);