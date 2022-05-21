// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             console.log(nums[i] + nums[j]);
//           return [i, j];
//         }
//       }
//     }
//   }

function twoSum(nums, target) {
    let numObj = {};
      for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        console.log(nums[i]);
        if (numObj[complement] !== undefined) {
            // console.log([numObj[complement], i]);
          return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
      }
    }

   let nums = [2, 7, 11, 15]
   let target = 9
 twoSum(nums, target) 
