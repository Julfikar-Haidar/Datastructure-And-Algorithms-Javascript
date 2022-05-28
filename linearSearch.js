// function linearSearch(num, key) {
//     for (let index = 0; index < num.length; index++) { //time complexity Big o(n) space complexity o(1)
//        if (num[index] === key) {
//            return index
//        }
        
//     }

//     return -1
// }


let linearSearch = (arr, item) => {
    return arr.indexOf(item) !== -1 ? true: false;
  }

const numbers = [2, 4, 67, 8, 44, 6, 12];

console.log(linearSearch(numbers,12));