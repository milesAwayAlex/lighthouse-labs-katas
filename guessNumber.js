// while prompt-sync is a valid option, it is much nicer
// to have zero dependencies for something like this, so
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Guess a number: ',
});

const n = Math.round(Math.random() * 100);
const g = [];
console.log("I've picked a number between 0 and 100. Can you guess it?");
rl.prompt();
rl.on('line', num => {
  // returned line is a string, try to cast it into a number
  num = +num;
  if (isNaN(num)) {
    console.log("Doesn't look like a number to me, try again!");
  } else if (g.includes(num)) {
    console.log('You already tried that one, try something new!');
  } else if (num > n) {
    g.push(num);
    console.log('Too High!');
  } else if (num < n) {
    g.push(num);
    console.log('Too Low!');
  } else if (num === n) {
    g.push(num);
    console.log(`You got it! It took ${g.length} attempts!`);
    rl.close();
  }
  rl.prompt();
}).on('close', () => process.exit(0));
