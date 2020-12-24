// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#BFDDFC',
      lineColor: '#BFDDFC',
      parallaxMultiplier: 10,
      density: 6000,
      particleRadius: 5,
      lineWidth: 0.7,
      proximity: 80 
    });
    var intro = document.getElementById('myskills');
    intro.style.marginTop = - intro.offsetHeight-150 + 'px';
  }, false);
  
  
  /*
  // jQuery plugin example:
  $(document).ready(function() {
    $('#particles').particleground({
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
    $('.intro').css({
      'margin-top': -($('.intro').height() / 2)
    });
  });
  */
  