function isPowerOfTwo(n) {
    if(n < 1) return false;

    while (n > 1) {
        if (n % 2 !== 0) {
            console.log('modulas');
            return false;
        }
        console.log(n);
        n = n / 2;
    }
    return true;
}
// Big-0 = 0(ologn)


function isPowerOfTwo(n) {
    if(n < 1) return false;
    return (n & (n - 1)) === 0;
}

isPowerOfTwo(16)

// Big-0 = 0(1)

