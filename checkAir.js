const checkAir = function (samples, threshold) {
  let d = 0;
  for (const s of samples) {
    if (s === 'dirty') d++;
  }
  return d / samples.length > threshold ? 'Polluted' : 'Clean';
};

console.log(
  checkAir(
    [
      'clean',
      'clean',
      'dirty',
      'clean',
      'dirty',
      'clean',
      'clean',
      'dirty',
      'clean',
      'dirty',
    ],
    0.3
  )
);

console.log(checkAir(['dirty', 'dirty', 'dirty', 'dirty', 'clean'], 0.25));

console.log(
  checkAir(['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'], 0.9)
);
