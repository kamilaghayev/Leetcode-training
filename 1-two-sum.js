// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


   //slow code 
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (i !== j && nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        console.log(map);
        if (map.has(difference)) {
            console.log(map);
            return [i, map.get(difference)]
        }
        
        map.set(nums[i], i)
    }
}
let numbers = [3,2,4], 
    targ = 6;
console.log(twoSum(numbers, targ));