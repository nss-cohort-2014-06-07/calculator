/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Calc = require('../../app/models/calc');

describe('Calc', function(){
  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calc.add(2,3);
      expect(sum).to.equal(5);
    });
  });

  describe('.sub', function(){
    it('should subtract two numbers', function(){
      var diff = Calc.sub(5,3);
      expect(diff).to.equal(2);
    });
  });

  describe('.distance', function(){
    it('should find the distance between two numbers', function(){
      var distance = Calc.distance({x:3,y:4}, {x:10,y:12});
      expect(distance).to.be.closeTo(10.63, 0.01);
    });
  });

  describe('.line', function(){
    it('should find the equation of a line', function(){
      expect(Calc.line({x:3,y:4}, {x:7,y:12})).to.be.equal('2.0x-2.0');
      expect(Calc.line({x:3,y:14}, {x:7,y:12})).to.be.equal('-0.5x+15.5');
    });
  });

  describe('.trip', function(){
    it('should find the total trip distance', function(){
      var distance = Calc.trip([{x:3,y:4}, {x:7,y:9}, {x:9,y:12}, {x:15,y:22}]);
      expect(distance).to.be.closeTo(21.67, 0.01);
    });
  });

  describe('.mean', function(){
    it('should find the average of a list of numbers', function(){
      var avg = Calc.mean([4,7,9,11]);
      expect(avg).to.be.closeTo(7.75, 0.01);
    });
  });
});

