function fibonanci(n){
    let a = 1,b = 1;
    for(let i = 0; i <= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonanci(5));