// Math science
const utils = {
  //checkStatus:
  checkStatus: arr => {
    return (
      [1, 2, 3].every(r => arr.includes(r)) ||
      [4, 5, 6].every(r => arr.includes(r)) ||
      [7, 8, 9].every(r => arr.includes(r)) ||
      [1, 4, 7].every(r => arr.includes(r)) ||
      [2, 5, 8].every(r => arr.includes(r)) ||
      [3, 6, 9].every(r => arr.includes(r)) ||
      [1, 5, 9].every(r => arr.includes(r)) ||
      [3, 5, 7].every(r => arr.includes(r))
    );
  },
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)
};

export default utils;
