exports.min = function min (array) {
  if (!Array.isArray(array) || array <= 0) {
    return 0;
  }
  return Math.min(... array);
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array <= 0) {
    return 0;
  }
  return Math.max(... array);
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array <= 0) {
    return 0;
  }
  return array.reduce((sum, item) => sum + item) / array.length;
}
