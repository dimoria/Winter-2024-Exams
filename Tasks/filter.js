'use strict'

const filter = (array, row) => {
   const arrayWithRemovedElements = [];
  for ( let elements of array) {
    let currentIndex = array.indexOf(elements);
    if (typeof array[currentIndex] !== row) {
      arrayWithRemovedElements.unshift(currentIndex);
    }
  }
  for (let removedElements of arrayWithRemovedElements) array.splice(removedElements, 1);
  return array;
};

module.exports = filter;
