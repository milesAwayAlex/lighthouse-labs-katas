const camelCase = function (input) {
  const arr = input.split(' ');
  let res = '';
  for (const w of arr) {
    if (!res) {
      res += w;
    } else {
      res += w[0].toUpperCase() + w.slice(1);
    }
  }
  return res;
};

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase('supercalifragalisticexpialidocious'));
