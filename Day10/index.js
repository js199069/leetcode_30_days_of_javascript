/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  var chkCall = false;
  var res;
  return function (...args) {
    if (!chkCall) {
      res = fn(...args);
      chkCall = true;
      return res;
    } else {
      return undefined;
    }
  };
};
