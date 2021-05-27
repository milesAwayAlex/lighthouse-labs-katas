const repeatNumbers = function (data) {
  let res = '';
  for (const a of data) {
    // if not the first entry, add the separator
    if (res) res += ', ';
    res += Array(a[1]).fill(a[0]).join('');
  }
  return res;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
