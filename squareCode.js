const squareCode = function (message) {
  const mess = message.replaceAll(' ', '').split('');
  const x = Math.ceil(mess.length ** 0.5);
  const messArr = [];
  // for loops allow arbitrary step size
  for (let i = 0; i < mess.length; i += x) {
    // assemble the square
    messArr.push(mess.slice(i, i + x));
  }
  let resArr = Array(x);
  // read the square top to bottom left to right
  // can be done with loops but more legible this way
  messArr.forEach(line => {
    line.forEach((l, i) => {
      if (!resArr[i]) resArr[i] = [];
      resArr[i].push(l);
    });
  });
  let res = '';
  for (const col of resArr) {
    res += col.join('') + ' ';
  }
  return res;
};

console.log(squareCode('chill out'));
console.log(squareCode('feed the dog'));
console.log(squareCode('have a nice day'));
console.log(
  squareCode(
    'if man was meant to stay on the ground god would have given us roots'
  )
);
