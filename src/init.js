$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function() {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random()
    );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
    
    dancer.$node.on('click', function() {
      findClosestDancerHandler.call(this);
    });
  });
  $('.dinnerTimeButton').on('click', function() {
    // dinnerTimeHandler(window.dancers);
    for (var i = 0; i < window.dancers.length; i++) {
      var newLeft = i * ($(window).width()) / window.dancers.length;
      var newPos = {
        top: 500,
        left: newLeft
      }
      $(window.dancers[i]).animate(newPos, "slow");
    }
  });

});

