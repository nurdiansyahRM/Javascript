function Hallo(name, langguage){
    if(langguage == "english"){
        console.log("Good Morning " + name +"!");
    }else if(langguage == "french"){
        console.log("Bonjour " + name +"!");
    }else if(langguage == "Indonesia"){
        console.log("selamat datang " +name+ "!");
    }
}
Hallo("nurdiansyah","english");

function aritmatika(a, b){
    return a+b;
}
let result = aritmatika(10,20);
console.log(result)