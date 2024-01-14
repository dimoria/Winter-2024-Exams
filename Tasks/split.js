'use strict'

let splitArray = (index, array) => {
  begin = inputArray.slice(0, index);
  const len = inputArray.length;
  array = inputArray.slice(index, len);
  return [begin, array];
};

module.exports = splitArray;
