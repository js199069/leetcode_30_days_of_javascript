/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  return arr.filter((item,index)=>fn(item,index));
};

var  arr = [0,10,20,30];
var fn = function greaterThan10(n) { return n > 10; };
console.log(filter(arr,fn))