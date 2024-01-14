'use strict'

 const counting = (object) => {
  let summary = 0;

 const keys = Object.keys(object);

  keys.forEach((key) => {
    const value = object[key];
    if (typeof value === 'number') {
      summary+= value;
    }
  });

  return summary;
};

module.exports = counting;
