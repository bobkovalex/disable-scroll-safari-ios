$(document).ready(function(){
    var scrollPositionY = 0;
    
    // Open Dialog
    $('#btn-open').click(function(){
        // Calc current scroll position
        scrollPositionY = window.scrollY;
        var pos = scrollPositionY + window.innerHeight - $('#dialog').height();
        // Set page container position to avoid scrollon to top after aplying position:fixed
        $('body').css('top', '-' + window.scrollY + 'px');
        // Prevent container from scrolling
        $('body').css('position', 'fixed');
        // Set dialog position at bottom of the visible screen
        $('#dialog').css('top', pos + 'px');
        // Show dialog & overlay
        $('#overlay').show();
        $('#dialog').show();
    });

    // Close Dialog
    $('#btn-close').click(function(){
        // Unset fixed position & prevent scrolling to top
        $('body').css('position', 'unset');
        $('body').scrollTop(scrollPositionY);
        // Hide dialog & overlay
        $('#overlay').hide();
        $('#dialog').hide();
    });

  });