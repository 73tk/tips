/*
* ランダムなカラーコード
* 文字列リテラル（#付き）で値を返す
*/

var randColor = function () {
  var randC = (Math.random() * 0xFFFFFF | 0).toString(16);
  return '#' + ('000000' + randC).slice(-6);
};

/*
* ランダムなRGBカラーコード
* 文字列リテラルで値を返す
*/

var randRGBColor = function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return r + ',' + g + ',' + b;
};

/*
* ランダムなRGBAカラーコード
* 文字列リテラルで値を返す
* alphaの値は0～1までの小数点第一位まで
*/

var randRGBAColor = function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var a = Math.floor(Math.random() * 11) / 10;
  return r + ',' + g + ',' + b + ',' + a;
};

/*
* ランダムなHSLカラーコード
* 文字列リテラルで値を返す
*/

var randHSLColor = function () {
  var h = Math.floor(Math.random() * 361);
  var s = Math.floor(Math.random() * 101);
  var l = Math.floor(Math.random() * 101);
  return h + ',' + s + '%,' + l + '%';
};

/*
* ランダムなHSLAカラーコード
* 文字列リテラルで値を返す
*/

var randHSLAColor = function () {
  var h = Math.floor(Math.random() * 361);
  var s = Math.floor(Math.random() * 101);
  var l = Math.floor(Math.random() * 101);
  var a = Math.floor(Math.random() * 11) / 10;
  return h + ',' + s + '%,' + l + '%,' + a;
};
