function binarySearch(arr,key) {
    let start = 0
    let end = arr.length - 1

    
    while (start <= end ) {
        let middle = Math.round((start + end) / 2)
        // console.log(arr[middle]);
        if (arr[middle] === key) {
            return middle
        } else if(key > arr[middle] ) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }

return -1
}


const numbers = [3, 5, 7, 9, 11, 13, 15, 16, 18, 21, 24, 25, 28]

console.log(binarySearch(numbers,18));