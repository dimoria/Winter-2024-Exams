'use strict'

 const skipElements = (originalArray, ...elementsToRemove) => {
  x = 0;
  for (C of  originalArray) {
    for (X of elementsToRemove) {
      if (C === X) {
        originalArray.splice(x, 1);
      }
    }
    x++;
  }
  return originalArray;
};

module.exports = skipElements;
