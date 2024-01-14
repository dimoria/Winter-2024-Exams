'use strict'

const duplicateArray = (value, N) => {
  if (N <= 0) {
    return [];
  }

    const result = Array.from({ length: N},() => value);
    return result;
  };

module.exports = duplicateArray;
