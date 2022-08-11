console.log("Bentuk kotak");
var a ='';
for(var i = 0;i<10;i++){
    for(var j = 0;j<10;j++){
        a+='*';
    }
    a +='\n';
}
console.log(a);
console.log("Bentuk siku 1");
var s = '';
for(var i = 1; i<=10; i++){
    for(var j = 1; j<=i; j++){
        s +='*';
    }
    s += '\n';
}
console.log(s);
console.log("Bentuk segita siku 2")
var d ='';
for(var i = 10; i > 0;i--){
    for(var j = 0; j < i;j++){
        d+='*';
    }
    d +='\n';
}
console.log(d)
console.log("bentuk segitiga siku 3");
var b ='';
for(var i = 10; i > 0;i--){
    for(var j = 0; j <=10;j++){
        if(j >= i){
            b +='* ';
        }else{
            b +=' ';
        }
    }
    b +='\n';
}
console.log(b);

a = '';
for (var i = 10; i >0;i--){
    for(var j = 10; j >0 ;j--){
        if(j >i){
            a +=' '
        }else{
            a += '*';
        }
    }
    a +='\n';
}
console.log(a);