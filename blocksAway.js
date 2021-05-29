const blocksAway = function (directions) {
  let pos = { east: 0, north: 0 };
  let dir;
  // driving logic for [+n,+e,-n,-e]
  let drive = [
    (pos, dist) => (pos.north += dist),
    (pos, dist) => (pos.east += dist),
    (pos, dist) => (pos.north -= dist),
    (pos, dist) => (pos.east -= dist),
  ];
  for (const instr of directions) {
    if (instr === 'left') {
      // start left or turn left, cycle through directions
      dir = dir === undefined ? 0 : (dir + 3) % 4;
    } else if (instr === 'right') {
      // start right or turn right
      dir = dir === undefined ? 1 : (dir + 1) % 4;
    } else {
      drive[dir](pos, instr);
    }
  }
  return pos;
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(
  blocksAway([
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
    'left',
    1,
    'right',
    1,
  ])
);
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));
