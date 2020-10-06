module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  let arr = str.split('');
  let reverseArr = arr.reverse();
  let reverseStr = reverseArr.join('');
  let reverseN = +reverseStr;
  return reverseN;
}
