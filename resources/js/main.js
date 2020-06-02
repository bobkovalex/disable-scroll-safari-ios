$(document).ready(function(){
    
    $('#btn-open').click(function(){
        var pos = window.scrollY + window.innerHeight - $('#dialog').height();
        $('body').css('position', 'fixed');
        $('html').css('position', 'fixed');
        $('#dialog').css('top', pos + 'px');
        $('#dialog').css('width', window.innerWidth + 'px');
        $('#overlay').show();
        $('#dialog').show();
    });

    $('#btn-close').click(function(){
        $('body').css('position', 'unset');
        $('html').css('position', 'unset');
        $('#overlay').hide();
        $('#dialog').hide();
    });

  });