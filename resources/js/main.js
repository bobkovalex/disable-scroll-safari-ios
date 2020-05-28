$(document).ready(function(){
    var viewportHeight = window.innerHeight;

    // $('.info').text(toggle);

    // var eTop = $('#btn').offset().top;

    // $(window).scroll(function() {
    //     $('.info').text('');
    // });

    // $('.button').css('top', 'calc(' + viewportHeight + ' - 80px)');
    
    $('#toggle-btn').click(function(){
        var pos = window.scrollY + window.innerHeight - $('#dialog').height();
        $('#dialog').css('top', pos + 'px');
        $('#overlay').toggle();
        $('#dialog').toggle();
    });
  });