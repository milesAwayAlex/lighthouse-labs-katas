const talkingCalendar = function (date) {
  const m = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const data = date.split('/');
  const d = +data[2];
  let o = 'th';
  if (d === 1 || d === 21 || d === 31) o = 'st';
  if (d === 2 || d === 22) o = 'nd';
  if (d === 3 || d === 23) o = 'rd';
  // type coercion is deliberate
  return m[data[1] - 1] + ' ' + d + o + ', ' + data[0];
};

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));
