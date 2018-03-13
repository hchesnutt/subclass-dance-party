var makeSpinningDancer = function(top, left, timeBetweenSteps = 900) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="spinningDancer"><img src="images/griffon.png"></span>');
  this.setPosition(top, left);
  this.$node.on('mouseover', function(event) {
    $(this).toggleClass('flip');
  });
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
};





