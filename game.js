var Crafty = require('craftyjs');

Crafty.init(300,300);

Crafty.background('black');

Crafty.e('2D, Canvas, Color, Fourway')
  .attr({x: 10, y: 10, w: 30, h: 30})
  .color('red')
  .fourway(3);
