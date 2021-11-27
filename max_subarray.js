function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    console.log('i',arr[i])
    temp = 0;
    for (let j = 0; j < num; j++) {
      console.log('j',arr[j])
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)


