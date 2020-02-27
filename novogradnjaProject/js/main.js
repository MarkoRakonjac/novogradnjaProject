
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".intro__nav").addClass('scrolled-nav');
    } else {
      $(".intro__nav").removeClass('scrolled-nav');
    }
});
