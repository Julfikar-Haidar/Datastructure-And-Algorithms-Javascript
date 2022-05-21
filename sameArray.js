
// [2,6,3] ,[9,4,36]
// time complexity o(n2)

// function sameArray(params1,params2) {
//     if(params1.length !== params2.length) {
//         return false
//     }

//     for (let index = 0; index < params1.length; index++) {
//         const currentIndex = params2.indexOf(params1[index] ** 2);
      
//         if (currentIndex === -1) {
//             return false
//         }

//         params2.splice(currentIndex,1)
//     }

//     return true

// }

// console.log(sameArray([2,6,3],[9,4,36]));

// time complexity n+n+n =  o(3n)/o(n)
function sameArray(arr1,arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let sequence1 = {}
    let sequence2 = {}
    
    for (let val of arr1) {
        sequence1[val] = sequence1[val] + 1 || 1
    }

    for (let key of arr2) {
        sequence2[key] = sequence2[key] + 1 || 1
    }
    
    for (const key in sequence1) {
      if (!(key ** 2) in sequence2) {
          return false
      }
      if (sequence2[key ** 2] !== sequence1[key]) {
          return false
      }
        // // console.log(sequence1[key]);
        // console.log(sequence1[key],sequence2[key ** 2]);
    }
    console.log(sequence1);
    console.log(sequence2);
    return true
    
}

// sameArray([2,6,3,3],[9,4,36,9])
console.log(sameArray([2,6,3],[9,4,36]));