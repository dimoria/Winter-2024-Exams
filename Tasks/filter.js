'use strict'

const filter = (array, neededType) => {
const arrayFiltered = array.filter(element => typeof element === neededType);
  return arrayFiltered;
};

module.exports = filter;
