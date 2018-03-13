
var findClosestDancerHandler = function() {
  var currentPosition = $(this).position();
  var closestDancer = findClosestDancer.call(this, currentPosition);
  closestDancer.animate({ 
    left: currentPosition.left + 75,
    top: currentPosition.top
  }, "slow" );
};

var findClosestDancer = function(currentPosition) {
  var closestDancer;
  var closestDistance;
  for (var i = 0; i < window.dancers.length; i++) {
      var currentDistance = Math.sqrt((currentPosition.top - window.dancers[i].position().top)**2 + 
      (currentPosition.left - window.dancers[i].position().left)**2)
    if (!closestDistance) {
      closestDistance = currentDistance;
      closestDancer = window.dancers[i];
    } else if (currentDistance < closestDistance && currentDistance > 0) {
      closestDistance = currentDistance;
      closestDancer = window.dancers[i];
    }
  }
  return closestDancer;
};
      
