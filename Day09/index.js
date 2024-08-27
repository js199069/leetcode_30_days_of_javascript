/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  var counter = 0;
  args.forEach((arg) => {
    counter++;
  });
  return counter;
  // or use simple one
  //return args.length
};
