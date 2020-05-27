$(document).ready(function(){
    var viewportHeight = window.innerHeight;
    $('.info').text(viewportHeight);

    $('.main-container').scroll(function() {
        $('.info').text(viewportHeight);
      });

    // $('.button').css('top', 'calc(' + viewportHeight + ' - 80px)');
    $('#btn').css('top', viewportHeight - 80 + 'px');
  });