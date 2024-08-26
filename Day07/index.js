/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length > 0) {
    var result = init;
    nums.forEach((num) => {
      result = fn(result, num);
    });
    return result;
  } else {
    return init;
  }
};
