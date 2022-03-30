
$(document).ready(function () {
    $('.my-paroller').paroller();

    //ham
    $('.ham a').click(function(){
        $('.ham-cont').fadeIn(150);
    });
    $('.close a').click(function(){
        $('.ham-cont').fadeOut(150);
    });

    //main circle
    var cc = $('.b-cc');
    cc.animate({
        width: '25vw',
        height: '25vw',
        zIndex: '1',
        opacity: '1'
    }, 1000, 'swing');            


    //about graph
    $('.process-cont').addClass('on');
    
    //about paroller
    $(".name").paroller({
        factor: 1,            // multiplier for scrolling speed and offset
        factorXs: 0.1,           // multiplier for scrolling speed and offset
        type: 'foreground',     // background, foreground
        direction: 'horizontal', // vertical, horizontal
        transition: 'transform 0.2s ease-in' // CSS transition
    });

});

//cursor
$(document).mousemove(function (e) {
    $('.cursor').css({left: e.pageX, top: e.pageY});

    $('.gnb_nav li').on({
        mouseenter: function () {
            $('.cursor').addClass('big');
        },
        mouseleave: function () {
            $('.cursor').removeClass('big');
        }
    });
    $('.hover li').hover(function () {
        $('.cursor').addClass('big');
    }, function () {
        $('.cursor').removeClass('big');
    });    
    $('.contact-txt li').hover(function () {
        $('.cursor').addClass('bcc');
    }, function () {
        $('.cursor').removeClass('bcc');
    });
    
    $('.b-cc').hover(function () {
        $('.cursor').addClass('bcc');
    }, function () {
        $('.cursor').removeClass('bcc');
    });
    

});


