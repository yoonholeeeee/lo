$(function(){    
    $('.popup ul li').click(function(){
        $('.popup').hide();
        $('.Lmaintitle,.oder').show();
    })


    $('.Lmain>.slide>li').mouseenter(function(){
        $(this).addClass('on');
    })
    $('.Lmain>.slide>li').mouseleave(function(){
        $(this).removeClass('on');
    })

    $('.btn1').hide()
    $('.btn1').click(function(){
        $('.evbox').animate({left:0})
        $('.btn2').show()
        $('.btn1').hide()
    })
    $('.btn2').click(function(){
        $('.evbox').animate({left:-900+"px"})
        $('.btn2').hide()
        $('.btn1').show()
    })





    let s = 0;
    function slider() {
        $('.Lslider>ul').animate({left: -100 + "%"},1000,function(){
            $('.Lslider>ul').append($('.Lslider>ul>li').first())
            $('.Lslider>ul').css({left:0})
        })
    }
    setInterval(slider,3000)

    let t=0;
    function slider2() {
        if(t<6){
            t++;
        }
        else{
            t=0;
        }
        $('.Lmain>.slide').animate({left: t * 300 * (-1) },1000)
    }
    setInterval(slider2,3000)




    $('.header1>h1').click(function(){
        $('.menu').slideToggle()
    })
    $('.menu>.menuClose').click(function(){
        $('.menu').slideUp()
    })

})