'use strict'

const splitArray = (index, inputArray) => {
  const begin = inputArray.slice(0, index);
  const end = inputArray.slice(index);

  return [begin, end];
};

module.exports = splitArray;
