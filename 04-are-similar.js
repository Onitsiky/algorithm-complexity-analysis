/*
 * Two arrays are called similar if one can be obtained from another
 * by swapping at most one pair of elements in one of the arrays.
 * Given two arrays a and b, check whether they are similar.
 */
const areSimilar = (a, b) => {
  for (var arr = [], i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      arr.push(a[i], b[i]);
    }
  }
  return arr.length < 5 && new Set(arr).size < 3;
};
/**
 * 7 => 5 * i
 * 8 => 3
 * 9 => 2
 * 12 => 3 + n
 * T04(n) = 5 * i + 3 + 2 + 3 + n 
 * T04(n) = 8 + 6n
 * T04(n) = n + 1 
 * O = n
 */