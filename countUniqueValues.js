function countUniqueValues(str) {
    if(str.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < str.length; j++) {
        if(str[i] !== str[j]) {
            i++
            str[i] = str[j];
        }
        // console.log(i,j);
    }
    return i + 1;
}

countUniqueValues([1, 2, 2, 5, 7, 7, 99])