const generateBoard = (wQ, bQ) => {
  const board = Array(8);
  // using loops for kata purposes
  for (let x = 0; x < board.length; x++) {
    board[x] = Array(8);
    for (let y = 0; y < board[x].length; y++) {
      board[x][y] = 0;
    }
  }
  board[wQ[0]][wQ[1]] = 1;
  board[bQ[0]][bQ[1]] = 1;
  return board;
};

const queenThreat = board => {
  const queens = [];
  // more kata loops
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const square = board[x][y];
      if (square === 1) queens.push([x, y]);
    }
  }
  // threat assessment
  if (
    queens[0][0] === queens[1][0] ||
    queens[0][1] === queens[1][1] ||
    queens[0][0] + queens[0][1] === queens[1][0] + queens[1][1] ||
    queens[0][0] - queens[0][1] === queens[1][0] - queens[1][1]
  ) {
    return true;
  }
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
let expectedBoard = [
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(
  'Expected board? ' +
    (JSON.stringify(generatedBoard) === JSON.stringify(expectedBoard))
);
console.log(queenThreat(generatedBoard));
// true

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
expectedBoard = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(
  'Expected board? ' +
    (JSON.stringify(generatedBoard) === JSON.stringify(expectedBoard))
);
console.log(queenThreat(generatedBoard));
// false
