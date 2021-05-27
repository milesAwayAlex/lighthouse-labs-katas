const urlEncode = function (text) {
  // strings are immutable, so trim and split into an array
  let res = text.trim().split('');
  for (let i = 0; i < res.length; i++) {
    const s = res[i];
    if (s === ' ') {
      // substitute ' ' for '%20'
      res[i] = '%20';
    }
  }
  return res.join('');
};

console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is greener than purple for sure'));
