const urlDecode = function (text) {
  const keyVal = text.split('&');
  const pairs = [];
  for (const pair of keyVal) {
    pairs.push(pair.split('=').map(s => s.replaceAll('%20', ' ')));
  }
  // can be done with loops, but looks nicer this way
  return Object.fromEntries(pairs);
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
