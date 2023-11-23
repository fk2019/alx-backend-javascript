const isNegativeZero = (num) => num === 0 && 1 / num === -Infinity;

const calculateNumber = (type, a, b) => {
  const a1 = Math.round(a);
  const b1 = Math.round(b);
  if (type === 'SUM') {
    return a1 + b1;
  }
  if (type === 'SUBTRACT') {
    return a1 - b1;
  }
  if (type === 'DIVIDE') {
    if (b1 === 0) return 'Error';
    const result = a1 / b1;
    return isNegativeZero(result) ? 0 : result;
  }
  return (0);
};

module.exports = calculateNumber;
