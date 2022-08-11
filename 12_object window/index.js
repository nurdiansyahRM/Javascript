const firstname = prompt("siapa nama depanmu ?");
const lastname = prompt("siapa nama akhirmu?")
const language = prompt("bisa bahasa apa?");

const user = {
    name: {
        first : firstname,
        last : lastname,
    },
        language : language
    };

if (user.language == "english"){
    alert("Nice to meet you " +user.name.first + " "+ user.name.last);
}else if(user.language == "indonesia"){
    alert("senang bertemu dengan mu " +user.name.first + " "+ user.name.last);
}else if(user.language == "sunda"){
    alert("bagja papangih jeng anjen " +user.name.first + " "+ user.name.last);
}else{
    alert("pilihan tidak tersedia");
}