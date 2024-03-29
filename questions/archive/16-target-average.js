// Given an array of numbers and a range return a collection of the moving averages
// TIME: O(n)
// SPACE: O(n)
//
// For example
//     + V +   // range of 3, average of [2,3,4]
//     + V + + // range of 4, average of [2,3,4,5] (is this better than the one below?)
//   + + V +   // range of 4, average of [1,2,3,4] (is this better than the one above?)
//   + + V + + // range of 5, average of [1,2,3,4,5]
//  [1,2,3,4,5,6,7]
//
// Example;
//
// targetAverage([1,2,3,4,5,6,7], 3);
// should return [1.5,2,3,4,5,6,6.5];

// const average = (nums) => {
//   const total = nums.reduce((total, curr) => {
//     return total + curr;
//   }, 0)
//
//   return total/nums.length;
// };
//
// const sliceRangeFromTarget = (arr, target, range) => {
//   const deviation = Math.floor(range / 2);
// // need to tweak start and end to get this to work right
//   const start = Math.max(0, target - deviation);
//   const end = Math.min(arr.length-1, target + range - 1);
//   const slicedSubArray = arr.slice(start, end);
//
//   console.log(target, start, end, slicedSubArray)
//
//   return slicedSubArray;
// };
//
// const targetAverage = (arr, r) => {
//   return arr.map((value, i, arr) => {
//     let slicedSubArray = sliceRangeFromTarget(arr, i, r);
//     return average(slicedSubArray);
//   })
// };

module.exports = targetAverage;
