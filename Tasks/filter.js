'use strict'

const filter = (T, t) => {
   const remove = [];
  for ( let C of T) {
    let x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (let x of remove) T.splice(x, 1);
  return T;
};

module.exports = filter;
