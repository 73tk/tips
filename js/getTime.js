/*
* 文字列リテラルで現在時刻（現地時間）を返す
*/

var currentTime = function () {
  var d = new Date();

  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  var day = 'SunMonTueWedThuFriSat'.substr(d.getDay() * 3, 3);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var msec = d.getMilliseconds();

  // Format for Japanese
  var heisei = 'H' + (d.getFullYear() - 1988);
  var dayJp = '日月火水木金土'[d.getDay()];

  // Format added zero
  var monthAdded0 = ('0' + (d.getMonth() + 1)).slice(-2);
  var dateAdded0 = ('0' + d.getDate()).slice(-2);
  var hoursAdded0 = ('0' + d.getHours()).slice(-2);
  var minutesAdded0 = ('0' + d.getMinutes()).slice(-2);
  var secondsAdded0 = ('0' + d.getSeconds()).slice(-2);
  var msecAdded0 = ('0' + d.getMilliseconds()).slice(-2);

  return year + '/' + monthAdded0 + '/' + dateAdded0 + '(' + day + ')' + ' ' + hoursAdded0 + ':' + minutesAdded0 + ':' + secondsAdded0 + '.' + msecAdded0;
};
