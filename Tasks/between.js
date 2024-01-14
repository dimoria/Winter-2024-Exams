'use strict'
 const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1) return '';
  else {
    let substring = str.substring(prefixIndex + prefix.length);
    str = str.substring(substring);
    if (suffix) {
      const suffixIndex = str.indexOf(suffix);
      if (suffixIndex === -1) {
        return '';
      } else {
        str = str.substring(0, suffixIndex);
      }
    }
  }
  return str;
};

module.exports = getValueBetween;
