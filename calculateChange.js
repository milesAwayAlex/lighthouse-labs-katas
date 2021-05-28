const calculateChange = function (total, cash) {
  const den = [
    { name: 'twentyDollar', val: 2000 },
    { name: 'tenDollar', val: 1000 },
    { name: 'fiveDollar', val: 500 },
    { name: 'twoDollar', val: 200 },
    { name: 'oneDollar', val: 100 },
    { name: 'quarter', val: 25 },
    { name: 'dime', val: 10 },
    { name: 'nickel', val: 5 },
    { name: 'penny', val: 1 },
  ];
  let due = cash - total;
  const c = {};
  for (const d of den) {
    if ((n = Math.trunc(due / d.val))) {
      c[d.name] = n;
      due -= d.val * n;
    }
  }
  return c;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
