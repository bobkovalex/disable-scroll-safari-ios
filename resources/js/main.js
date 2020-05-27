$(document).ready(function(){
    var viewportHeight = window.innerHeight;

    // $('.info').text(toggle);

    var eTop = $('#btn').offset().top;

    // $(window).scroll(function() {
    //     $('.info').text('');
    // });

    // $('.button').css('top', 'calc(' + viewportHeight + ' - 80px)');
    
    $('.info').click(function(){
        $('.info').text(window.scrollY + window.innerHeight);
        var pos = window.scrollY + window.innerHeight - 60;
        $('#btn').css('top', pos + 'px');
        $('#btn').toggle();
    });
  });