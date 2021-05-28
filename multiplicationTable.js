const multiplicationTable = function (maxValue) {
  let res = [];
  for (let x = 1; x <= maxValue; x++) {
    let row = [];
    for (let y = 1; y <= maxValue; y++) {
      row.push(x * y);
    }
    res.push(row.join(' '));
  }
  res = res.join('\n\n') + '\n\n';
  return res;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
