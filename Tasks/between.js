'use strict'
 const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1){
      return '';
  }
    let substring = str.substring(prefixIndex + prefix.length);
    if (suffix) {
      const suffixIndex = substring.indexOf(suffix);
      if (suffixIndex === -1) {
        return '';
    }

      substring=substring.substring(0, suffixIndex)
  }
  return substring;
};

module.exports = getValueBetween;
