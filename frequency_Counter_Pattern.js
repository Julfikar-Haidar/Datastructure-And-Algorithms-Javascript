// naive approch 
function frequencyCounterPattern(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let index = 0; index < arr1.length; index++) {
        let correctIndex = arr2.indexOf(arr1[index]**2);

        if (correctIndex === -1) {
            return false
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);

        
    }

    return true;
}


// frequencyCounterPattern([1,2,3],[1,9,4])


function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

   let frequencyCounterPattern1 = {}
   let frequencyCounterPattern2 = {}
   
   for (const val  of arr1) {
    frequencyCounterPattern1[val] = (frequencyCounterPattern1[val] || 0) + 1
   }

   for (const val  of arr2) {
    frequencyCounterPattern2[val] = (frequencyCounterPattern2[val] || 0) + 1
   }

   console.log(frequencyCounterPattern1);
   console.log(frequencyCounterPattern2);

   for (const key in frequencyCounterPattern1) {
    if (!(key ** 2 in frequencyCounterPattern2)) {
        return false;
    }

    if (frequencyCounterPattern2[key ** 2] !== frequencyCounterPattern1[key]) {
        return false;
    }
   }

   return true;

}

same([1,2,3,2,5], [9,1,4,4,11])