'use strict'

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',];

 const getMonthsNumber = (input) => {
  const lowerCaseInput = input.toLowerCase();
  for (let i = 0; i < months.length; i++) {
    if (lowerCaseInput.startsWith(months[i])) {
     return i + 1;
    }
  }
  return -1;
};
module.exports = getMonthsNumber;
