const sumLargestNumbers = arr => {
  // initialize the values to add
  let a = -Infinity;
  let b = -Infinity;
  for (const n of arr) {
    // if the number is larger than both a and b..
    if (n > a && n > b) {
      // assign the number to a and a to b
      [a, b] = [n, a];
      // if the number is between a and b..
    } else if (n < a && n > b) {
      // assign the number to b
      b = n;
    }
  }
  return a + b;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
