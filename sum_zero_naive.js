// Time complexity o(n2)
// Approch one 
// Not optimal solution for Multiple pointers pattern
// function sumZero(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 console.log([arr[i], arr[j]])
//                 return [arr[i], arr[j]];
//             } 
//         }
//     }
// }

// sumZero([-4, -3, -2, -1, 3, 9, 6, 4])

// optimal solution for Multiple pointers pattern
// Approch two 
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (arr[left] + arr[right] === 0) {
            console.log([arr[left], arr[right]])
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

sumZero([-4, -3, -2, -1, 3, 9, 6, 4])