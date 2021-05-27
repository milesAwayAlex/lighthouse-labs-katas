const instructorWithLongestName = function (instructors) {
  // init nameLength and resulting index
  let nl = 0;
  let res;
  for (let i = 0; i < instructors.length; i++) {
    const o = instructors[i];
    // if the new name is longer than nl
    if (o.name.length > nl) {
      // set the new index
      res = i;
      nl = o.name.length;
    }
  }
  return instructors[res];
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ])
);
