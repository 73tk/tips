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

/*
* 文字列リテラル配列をアルファベット順に並び替え
* 大文字、小文字が混合する配列にも対応
*/

var sortAlphabetical = function (arr) {
  arr.sort(function(a, b){
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    if(a < b){
      return -1;
    }else if(a > b){
      return 1;
    }
    return 0;
  });
};
