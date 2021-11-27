function coolectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(coolectOddValues(arr.slice(1)));
   console.log(newArr);
    return newArr;
}


coolectOddValues([1, 2, 3, 4, 5])