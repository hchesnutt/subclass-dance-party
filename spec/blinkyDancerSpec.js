describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });  
});

describe('Closest Dancer', function() {
  window.dancers = [];
  
  it('findClosestDancerHandler should move closest dancer next to dancer focal object', function() {
    var blinkyDancer = (new makeBlinkyDancer(10, 10, 100)).$node;
    var growingDancer = (new makeGrowingDancer(20, 20, 100)).$node;
    var spinningDancer = (new makeSpinningDancer(40, 40, 100)).$node;
    window.dancers.push(blinkyDancer, growingDancer, spinningDancer);
    var growingDancerPosition = growingDancer.position();
    var blinkyDancerPosition = blinkyDancer.position();
    console.log(growingDancer.left)
    console.log(blinkyDancerPosition)
    findClosestDancerHandler.call(blinkyDancer);
    expect(growingDancerPosition.left).to.equal(blinkyDancerPosition.left + 75);
  });
  
  
  // add dancers to window.dancers
  // trigger mouse click
  // for each dancer in window.dancers, expect top to equal 500)
  
});
