function max_low_number(arr) {
    let higher = arr[0]
    let lower = arr[0]
   

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] !== 'number') continue;
        console.log(typeof arr[i]);
        if (higher < arr[i]) {
            higher = arr[i]
        }
        // console.log('higer', arr[i]);
        if (lower > arr[i]) {
            lower = arr[i]
        }
    }
    //  console.log('11', higher,lower);
    return higher - lower
}

let value = [4,9,100,43,'std',29]

console.log(max_low_number(value));