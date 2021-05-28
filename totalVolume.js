const sphereVolume = function (radius) {
  return (4 / 3) * Math.PI * radius ** 3;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (1 / 3) * Math.PI * height * radius ** 2;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return width * depth * height;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let res = 0;
  for (const s of solids) {
    switch (s.type) {
      case 'sphere':
        res += sphereVolume(s.radius);
        break;
      case 'cone':
        res += coneVolume(s.radius, s.height);
        break;
      case 'prism':
        res += prismVolume(s.height, s.width, s.depth);
        break;
      default:
        throw new Error('Unknown shape: ' + s.type);
    }
  }
  return res;
};

const largeSphere = {
  type: 'sphere',
  radius: 40,
};

const smallSphere = {
  type: 'sphere',
  radius: 10,
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
