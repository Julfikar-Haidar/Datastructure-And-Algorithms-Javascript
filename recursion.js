// function recursion(n) {
//     console.log(n);
//     n--
//     if (n > 0) {
//         recursion(n)
//     }
// }

// recursion(10)

// function recursion(n) {
//     if(n < 0) return 0
//     let sum = 0
//     if (n > 0) {
        
//         sum = sum + recursion(n - 1)
//         console.log(n);
//     }
//     return sum
// }

// console.log(recursion(10));
// time complexity Big o(n*n) = n2
// space complexity o(n)
function recursionslow(n) {
    if(n.length === 0) return 0
    let rest = n.slice(1) //n
    // console.log(rest);
    return n[0] + recursionslow(rest) //n
}

// console.log(recursionslow([1,5,8,10]));

// time complexity Big o(n) = n
// space complexity o(n)
function recursionFast(arr) {
    return helperSum(arr,0)
}

function helperSum(arr,index) {
    if(arr.length === index) return 0
    
    return arr[index] + helperSum(arr, index + 1) //n
}


// console.log(recursionFast([1,5,8,10]));
let input = new Array(8000).fill(2)
// console.log(input);
let nw = Date.now()
console.log(recursionslow(input));
let f = Date.now() 
console.log(`the slow complie ${f - nw} ms`);

let now = Date.now()
console.log(recursionFast(input));
let final = Date.now() 
console.log(`the fast complie ${final - now} ms` );