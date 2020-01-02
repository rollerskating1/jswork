$(function(){
    var i = 0;
    var timer = null;
    var delay = 1000;
    var width = 1420;
    var speed = 400;
    var firstimg = $('.hot li').first().clone();
    $('.hot').append(firstimg).width($('.hot li').length * width);
    timer = setInterval(imgChange,delay);
    $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(imgChange,delay);
    });
    $('.dot li').mouseover(function(){
        i = $(this).index();
        $('.hot').stop().animate({
            left: -i * width
        },200);
        dotChange();
    });
    $('.banner').hover(function(){
        $('.arrow').show();
    },function(){
        $('.arrow').hide();
    });
    $('.next').click(function(){
        imgChange()
    });
    $('.prev').click(function(){
        --i;
        if(i == -1){
            i = $('.hot li').length - 2;
            $('.hot').css({
                left: -($('.hot li').length - 1) * width
            });
        }
        $('.hot').stop().animate({
            left: -i * width
        },speed);
        dotChange();
    });
    function imgChange(){
        ++i;
        isCrack();
        dotChange();
    }
    function isCrack(){
        if(i == $('.hot li').length){
            i = 1;
            $('.hot').css({
                left: 0
            });
        }
        $('.hot').stop().animate({
            left: -i * width
        },speed);
    }
    function dotChange(){
        if(i == $('.hot li').length - 1){
            $('.dot li').eq(0).addClass('on').siblings().removeClass('on');
        }else{
            $('.dot li').eq(i).addClass('on').siblings().removeClass('on');
        }
    }
});