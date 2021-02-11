/*
lenear search algorithim its Works like a straight linear line
time complexity big of 0(n)
Suppose you are given a list or an array of items. You are searching for a particular item. How do you do that?
[5,15,9,13,10]
Find the number 13 in the given list.
A computer cannot look at more than the value at a given instant of time. So it takes one item from the array and checks if it is the same as what you are looking for.
5 != 13
The first item did not match. So move onto the next one.

*/
// function linearSearch(arr, key){
//     let res = []

//     for(let i =0; i<arr.length; i++){
//         if(arr[i] == key){
//             // console.log(i)
//             return res.push(i);
            
//         }
//     }
//     return -1
    
// }

// linearSearch(['a', 'b', 'c', 'd'], 'm')


/**
 * Binary search
 * We look at the middle of the array. We take the number of elements, and we divide it by 2. Imagine we have a part of the array on the left, and the other part on the right.

    If the item we have is lower than the one we’re looking for, then it must be in the right part, so we can completely discard the part on the right.

    Then we perform the same action, dividing the right part of the array in 2, looking at the middle item, and we throw away part of the array.
 **/

const binarySearch = (arr,key) => {
    let start = 0;
    let end = arr.length -1

    while (start <= end) {
        let mid = Math.floor((start + end)/2)
        if( arr[mid] === key){
           return mid
        }else if(  arr[mid] > key){
           end = mid -1
        }else{
           start = mid + 1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 9))