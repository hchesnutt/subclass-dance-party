var makeGrowingDancer = function(top, left, timeBetweenSteps = 900) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="growingDancer"><img src="images/pomchi.jpg"></span>');
  this.setPosition(top, left);

};

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;

makeGrowingDancer.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;
  // call the old version of step at the beginning of any call to this new version of step
  oldStep.call(this);
  this.$node.toggle('scale');
};





