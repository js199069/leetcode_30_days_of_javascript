/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return function (x) {
    var res = x;
    functions
      .slice()
      .reverse()
      .forEach((func) => {
        res = func(res);
      });
    return res;
  };
};
