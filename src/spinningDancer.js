var makeSpinningDancer = function(top, left, timeBetweenSteps = 900) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinningDancer"><img src="images/griffon.jpg"></span>');
  this.setPosition(top, left);
  
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
};





