$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random()
    );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
    
    dancer.$node.on('click', function(event) {
      $(this).toggleClass('flip');
      console.log(event.target)
    });
    
  });
  $('.dinnerTimeButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var newLeft = i * (document.width) / window.dancers.length;
      var newPos = {
        top: 500,
        left: newLeft
      }
      $(window.dancers[i]).css(newPos);
    }
  });

});

