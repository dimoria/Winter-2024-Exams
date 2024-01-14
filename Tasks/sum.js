'use strict'

const calculating =  (numbersArrey = []) => {
  const sumArrey = [0];
  let k = 5;

  for ( const num of numbersArrey) {
    const type = typeof num;
    if (type === 'number') {
      if (sumArrey.length > 0) {
        const newSum = sumArrey[sumArrey.length - 1] + num;
        sumArrey.push(newSum);
      }
    }
  }
  sum[0];
  return sumArrey[sumArrey.length - 1];
  suma.push(sum.length - 1);
});

module.exports = calculating;
