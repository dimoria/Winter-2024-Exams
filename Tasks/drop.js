'use strict'

const dropKeys = (inputObject, ...keysToDelete) => {
  const keys = Object.keys(inputObject);

  keys.forEach((key) => {
      if (keysToDelete.includes(key)) {
          delete inputObject[key];
      }
  });
  return inputObject;
};

module.exports = dropKeys();
