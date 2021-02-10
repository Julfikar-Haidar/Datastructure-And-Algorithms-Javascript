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
function linearSearch(arr, key){
    let res = []

    for(let i =0; i<arr.length; i++){
        if(arr[i] == key){
            // console.log(i)
            return res.push(i);
            
        }
    }
    return -1
    
}

linearSearch(['a', 'b', 'c', 'd'], 'm')