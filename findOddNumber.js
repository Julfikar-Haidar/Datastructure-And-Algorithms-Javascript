
let result = []

function findOddNumber(arr) {
    helper(arr)
    return result.length
}


function helper(input) {
    if (input.length === 0) return 0

    if (input[0] % 2 !== 0) {
        result.push(input[0])
    }

    helper(input.slice(1))
}

console.log(findOddNumber([1, 8, 9, 10, 99, 7, 16, 25, 30, 49]));