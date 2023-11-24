const Utils = {
  calculateNumber(type, a, b) {
    const a1 = Math.round(a);
    const b1 = Math.round(b);
    if (type === 'SUM') {
      return a1 + b1;
    }
    if (type === 'SUBTRACT') {
      return a1 - b1;
    }
    if (type === 'DIVIDE') {
      return b1 === 0 ? 'Error' : a1 / b1;
    }
    return (0);
  },
};
module.exports = Utils;
