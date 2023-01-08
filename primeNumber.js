function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            return false;
        }  
        console.log(index);      
    }
    return true
}

// console.log(isPrime(3));
// console.log(isPrime(9));
console.log(isPrime(17));

console.log(Math.sqrt(17));