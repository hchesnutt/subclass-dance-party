$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function() {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // create dancer
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random()
    );
    
    // append to body
    $('body').append(dancer.$node);
    
    // add to dancers array
    window.dancers.push(dancer.$node);
    
    // add interactive event to dancer
    dancer.$node.on('click', function() {
      findClosestDancerHandler.call(this);
    });
  });
  
  // add event handler to dinner button
  $('.dinnerTimeButton').on('click', function() {
    callDinnerTimeHandler();
  });
});