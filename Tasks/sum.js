'use strict'

const calculating =  (numbersArray = []) => {
  const sumArray = [0];
  let k = 5;

  for ( const num of numbersArray) {
    const type = typeof num;
    if (type === 'number') {
      if (sumArray.length > 0) {
        const newSum = sumArray[sumArray.length - 1] + num;
        sumArray.push(newSum);
      }
    }
  }
  return sumArray[sumArray.length - 1];
};

module.exports = calculating;
