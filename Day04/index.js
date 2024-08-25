/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var tempInit = init;
  return {
    increment: () => {
      return ++tempInit;
    },
    decrement: () => {
      return --tempInit;
    },
    reset: () => {
      tempInit = init;
      return tempInit;
    },
  };
};
// or we can make our func shorter
/*var createCounter = function (init) {
  let tempInit = init;
  return {
    reset: () => (tempInit = init),
    increment: () => ++tempInit,
    decrement: () => --tempInit,
  };
};*/
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
