

// function containWithMostWater(heights) {
//     let totalWater = 0
//   for (let i = 0; i < heights.length; i++) {
//         for (let j = i + 1; j < heights.length; j++) {
//             let height
           
//             // console.log(heights[i],heights[j]);
//             if (heights[i] > heights[j]) {
//                 height = heights[j]
//             } else {
//                 height = heights[i]
//             }

//             let width = j - i 
//             currentTotalWater = height * width
//             if (totalWater < currentTotalWater) {
//                 totalWater = currentTotalWater
//                 // console.log(totalWater);
//             }
//             console.log(i,j);
//             console.log(height);
//         }
    
//   }
//   return totalWater;
// }
function containWithMostWater(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    console.log(i,j);
    while (j > i) {
      const a = height[i];
      const b = height[j];
      console.log(a,b);
      const area = Math.min(a, b) * (j - i);
      console.log('area',area);
      if (area > max) max = area;
  
      if (b > a) i++;
      else j--;
    }
  
    return max;
  }

console.log(containWithMostWater([1,8,6,2,5,4,8,3,7]));

// 1 2 3 4 5 6 7 8 
// 
