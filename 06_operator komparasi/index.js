let a = 10;
let b =15;

console.log(a < b);
console.log(a > b);


const aString ='10';
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString === aNumber);


// operator logika

// operator And
console.log("+++++ Operator Logika +++++++");
console.log(a < 15 && b > 10);
console.log(a > 15 && b > a);

// operator Or
console.log(a < 15 || b > 10);
console.log(a > 15 || b > a);

//operator NOT
console.log("<br>")
console.log(!(a < 15));
console.log(!(a < 15 && b>10));