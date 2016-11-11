/*
* 数値リテラル配列内の最小値を返す
*/

var minInArray = function (arr) {
  return Math.min.apply(null, arr);
};

/*
* 数値リテラル配列内の最大値を返す
*/

var maxInArray = function (arr) {
  return Math.max.apply(null, arr);
};

/*
* 数値リテラル配列を登り順に並び替え
*/

var sortUpInArray = function (arr) {
  arr.sort(function (a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
    return 0;
  });
  return arr;
};

/*
* 数値リテラル配列を下り順に並び替え
*/

var sortDownInArray = function (arr) {
  arr.sort(function (a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
    return 0;
  });
  return arr;
};
