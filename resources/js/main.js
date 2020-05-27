$(document).ready(function(){
    var viewportHeight = window.innerHeight;
    $('.info').text(viewportHeight);
    var eTop = $('#btn').offset().top;

    $(window).scroll(function() {
        $('.info').text(viewportHeight);
    });

    // $('.button').css('top', 'calc(' + viewportHeight + ' - 80px)');
    $('#btn').css('top', viewportHeight - 80 + 'px');
  });