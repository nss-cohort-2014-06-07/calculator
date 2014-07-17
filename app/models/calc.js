'use strict';

function Calc(){}

Calc.add = function(x,y){
  return x + y;
};

Calc.sub = function(x,y){
  return x - y;
};

Calc.distance = function(p1, p2){
  var x = Math.pow((p2.x - p1.x), 2);
  var y = Math.pow((p2.y - p1.y), 2);
  return Math.sqrt(x + y);
};

Calc.line = function(p1, p2){
  var x = p2.x - p1.x;
  var y = p2.y - p1.y;
  var m = y/x;
  var b = p1.y - (m*p1.x);

  var sign = b < 0 ? '-' : '+';
  b = Math.abs(b);

  return m.toFixed(1) + 'x' + sign + b.toFixed(1);
};

Calc.trip = function(points){
  var sum = 0;

  for(var i = 0; i < (points.length - 1); i++){
    sum += Calc.distance(points[i], points[i+1]);
  }

  return sum;
};

Calc.mean = function(numbers){
  var sum = 0;

  for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }

  return sum/numbers.length;
};

module.exports = Calc;

