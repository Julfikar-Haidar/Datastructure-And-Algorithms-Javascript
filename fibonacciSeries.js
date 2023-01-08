function fibonacci(n) {
    let fibo = [0, 1]

    for (let index = 2; index < n; index++) {
        fibo[index] = fibo[index - 1] + fibo[index - 2];
        
    }

    return fibo;
}

console.log(fibonacci(7));

// Big-0(n)

// recursively solve this problem but it's not optimal solution
function fibonacciSequence(n) {
    if (n <= 1) {
        return n
    }

    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
}
// Big-0(2^n)