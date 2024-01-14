// Get day number
'use strict'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (input) => {
  const lowerCaseInput = input.toLowerCase();
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (lowerCaseInput.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
