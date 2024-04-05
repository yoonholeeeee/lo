$(function(){ 
    const date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var today = `${year}${month}${day}`;

    if(today !== localStorage.getItem('today')){
        $('.popup').show();
        $('body').css('overflow','hidden');
    } else {
        $('.popup').hide();
        $('.Lmaintitle,.oder').show();
        
    }

    $('#today').click(function(){
        const date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var today = `${year}${month}${day}`;
        console.log(today);
        localStorage.setItem("today",today);
        $('.popup').hide();
        $('.Lmaintitle,.oder').show();
    })

    $('.close').click(function(){
        $('.oderpop,.oderpopback').hide();
        $('body').css('overflow','auto');
    })
 
    $('.oder').click(function(){
        $('.oderpop,.oderpopback').show();
        $('body').css('overflow','hidden');
        
    })

    $('.oder').mouseenter(function(){
        $('.oder').css('scale','1.1')
    })
    $('.oder').mouseleave(function(){
        $('.oder').css('scale','1')
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  
   $('#layer1').click(function(){
        $('.menu').slideDown();
        $('#layer1').css('transform', 'rotate(30deg)').css('top','0').css('left','10'+"px").css('height','0'+"px").css('opacity','0.4');
        $('#layer2').css('transform', 'rotate(-45deg)').css('top','58' +"px");
        $('#layer3').css('transform', 'rotate(45deg)');
        
    })
    $('#layer2,#layer3').click(function(){
        $('.menu').slideUp()
        $('#layer1').css('transform', 'rotate(0deg)').css('top','10' +"px").css('left','0'+"px").css('height','200'+"px").css('opacity','1');
        $('#layer2').css('transform', 'rotate(0deg)').css('top','48' +"px");
        $('#layer3').css('transform', 'rotate(0deg)');
    })
    
    $('.popup ul li').click(function(){
        $('.popup').hide();
        $('.Lmaintitle,.oder').show();
        $('body').css('overflow','auto');
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
        $('.swiper-wrapper').animate(1000);
    }
    setInterval(slider2,3000);
})