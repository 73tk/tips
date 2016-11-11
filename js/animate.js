/*
* 等速円運動の座標計算
*/

var calcPositionInCircularMotion = function () {
  var theta = 0;
  var radius = 100; // ex) r = 100
  var anim = function () {
    var radian = theta * Math.PI / 180;
    var pos = {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian)
    };
    theta++;
    console.log(pos.x + ', ' + pos.y);
    requestAnimationFrame(anim);
  };
  anim();
};
