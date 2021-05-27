const numberOfVowels = function (data) {
  // initialize the counter
  let c = 0;
  // define the vowels
  const v = 'AEIOU';
  // convert data to upper case and test each letter
  for (const l of data.toUpperCase()) {
    if (v.includes(l)) c++;
  }
  return c;
};

console.log(numberOfVowels('orange'));
console.log(numberOfVowels('lighthouse labs'));
console.log(numberOfVowels('aeiou'));
