'use strict'

 const skipElements = (originalArray, ...elementsToRemove) => {
  const newArray = originalArray.filter(item => !elementsToRemove.includes(item));
  return newArray;
};

module.exports = skipElements;
