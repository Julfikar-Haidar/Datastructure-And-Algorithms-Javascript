function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
           if (arr[j] < arr[j - 1]) {
            //   let temp = arr[j]
            //   arr[j]  = arr[j-1]
            //   arr[j-1] = temp
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]] // es6 new way to swap data
           }
        }
        
    }

    return arr
}

console.log(insertionSort([4, 2, 3, 1,0]));