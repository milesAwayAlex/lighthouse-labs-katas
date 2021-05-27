const conditionalSum = function (values, condition) {
  let s = 0;
  // set the modulo according to the condition
  let m = condition === 'odd' ? 1 : 0;
  for (const n of values) {
    // if the number satisfies the condition - add it
    if (n % 2 === m) s += n;
  }
  return s;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));
