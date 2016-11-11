/*
* 通常の乱数
* 0.0から1.0未満の値が均等に出現
*/

var randNum = function () {
  return Math.random();
};

/*
* 整数の乱数
* 0から1未満の値が均等に出現
*/

var randFloorNum = function () {
  return Math.floor(Math.random());
};

/*
* 上限付きの乱数
* ex) 0〜10の乱数（整数）が出現
*/

var randNumLimited = function () {
  var max = 10; // ex) a = 10;
  return Math.floor(Math.random() * (max + 1));
};

/*
* 上限・下限付きの乱数
* ex) 1〜10の乱数（整数）が出現
*/

var randNumInRange = function () {
  var min = 1;  // ex) a = 1;
  var max = 10; // ex) b = 10;
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

/*
* 小数点第1位までの上限付き乱数
* 0からaまでの小数点第1位までの値が均等に出現
*/

var randDecimalNum = function () {
  var max = 5; // ex) a = 5;
  return Math.floor(Math.random() * (max * 10 + 1)) / 10;
};

/*
* 乱数の加算
* 分布は直線的
* 中央の値（0.5）の出現率が高い
*/

var randNumAdded = function () {
  return (Math.random() + Math.random()) / 2;
};

/*
* 乱数の乗算
* 分布は曲線的
* 0.0付近の出現率が高い
* 値が大きくなるにつれて出現率が減る
*/

var randNumMultiplied = function () {
  return Math.random() * Math.random();
};

/*
* 乱数の2乗
* 分布は曲線的
* 0.0付近の出現率がより高い
* 値が大きくなるにつれて出現率が減る
* 乗算の乱数と比べて急激な分布
* 明確に偏りを持たせたい場合に使用
*/

var squareRandNumMultiplied = function () {
  var r = Math.random();
  return r * r;
};

/*
* 乱数の平方根
* 分布は直線的
* 出現頻度が0.0から1.0まで直線的に増える
*/

var sqrtRandNum = function () {
  return Math.sqrt(Math.random());
};

/*
* 正規乱数
* 分布は曲線的で山なり
* 中心部分が一番出現頻度が高い
* 中心から離れるほど頻度が急激に減少
*/

var narmalRandNum = function () {
  var r1 = Math.random();
  var r2 = Math.random();
  var value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
  // 値を0以上1未満になるよう正規化
  value = (value + 3) / 6;
  return value;
};

/*
* 分布の反転
* 各乱数の分布を反転
*/

var sqrtRandNum = function () {
  return 1.0 - Math.random();
};
