function analyzeArray(array) {
  let sum = 0;
  let minimum = array[0];
  let maximum = array[0];
  array.forEach((item) => {
    sum += item;
    if (item < minimum) {
      minimum = item;
    } else if (item > maximum) {
      maximum = item;
    }
  });
  let len = array.length;

  return {
    average: sum / len,
    min: minimum,
    max: maximum,
    length: len,
  };
}

module.exports = analyzeArray;
