//global variable dapat diakses pada parent() dan child()

const a = 'a';
function parent(){
    const b = 'b';
    function child(){
        const c = 'c';
    }
}

let total = null;
function multiply(num){
        total = num * num;
        return total;
    }
let number = multiply(20);
console.log(total);