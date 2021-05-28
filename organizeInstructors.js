const organizeInstructors = function (instructors) {
  const res = {};
  for (const i of instructors) {
    if (!res[i.course]) {
      res[i.course] = [i.name];
    } else {
      res[i.course].push(i.name);
    }
  }
  return res;
};

console.log(
  organizeInstructors([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Victoria', course: 'Web' },
    { name: 'Karim', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  organizeInstructors([
    { name: 'Brendan', course: 'Blockchain' },
    { name: 'David', course: 'Web' },
    { name: 'Martha', course: 'iOS' },
    { name: 'Carlos', course: 'Web' },
  ])
);
