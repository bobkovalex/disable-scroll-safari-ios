$(document).ready(function(){
    var viewportHeight = $(window).height() - 80 + 'px';
    $('.info').text(viewportHeight);

    // $('.button').css('top', 'calc(' + viewportHeight + ' - 80px)');
    $('#btn').css('top', viewportHeight);
  });