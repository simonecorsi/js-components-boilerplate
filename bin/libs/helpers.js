export const toUpperCammelCase = function _toUpperCammelCase(string) {
  if (!string || !string.length) return null;
  const convert = matches => matches[1].toUpperCase();
  const output = string.replace(/(\-\w)/g, convert);
  const split = output.split('');
  split[0] = split[0].toUpperCase();
  return split.join('');
};
