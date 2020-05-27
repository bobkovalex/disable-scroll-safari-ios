$(document).ready(function(){
    var viewportHeight = $(window).height();
    $('.info').text(viewportHeight);

    $('button').css('top', 'calc(' + viewportHeight + ' - 80px)')
  });