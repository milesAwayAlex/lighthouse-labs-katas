const makeCase = function (input, cases) {
  const caseMachine = {
    vowels: 'AEIOU',
    // reusing the camelCase from earlier
    camel: function (input) {
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
    },
    pascal: function (input) {
      const camel = this.camel(input);
      return camel[0].toUpperCase() + camel.slice(1);
    },
    snake: function (input) {
      return input.replaceAll(' ', '_');
    },
    kebab: function (input) {
      return input.replaceAll(' ', '-');
    },
    // can be done with loops, but mapped here for legibility
    title: function (input) {
      return input
        .split(' ')
        .map(w => w[0].toUpperCase() + w.slice(1))
        .join(' ');
    },
    vowel: function (input) {
      return input
        .split('')
        .map(l => {
          if (this.vowels.includes(l.toUpperCase())) {
            return l.toUpperCase();
          } else return l;
        })
        .join('');
    },
    consonant: function (input) {
      return input
        .split('')
        .map(l => {
          if (!this.vowels.includes(l.toUpperCase())) {
            return l.toUpperCase();
          } else return l;
        })
        .join('');
    },
    upper: function (input) {
      return input.toUpperCase();
    },
    lower: function (input) {
      return input.toLowerCase();
    },
  };
  // if a single casing style was passed
  if (!Array.isArray(cases)) return caseMachine[cases](input);
  // else declare precedence
  const precedence = [
    'camel',
    'pascal',
    'snake',
    'kebab',
    'title',
    'vowel',
    'consonant',
    'upper',
    'lower',
  ];
  let res = input;
  for (const t of precedence) {
    if (cases.includes(t)) {
      res = caseMachine[t](res);
    }
  }
  return res;
};

console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', ['upper', 'snake']));
