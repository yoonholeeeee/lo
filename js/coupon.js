$(function(){
    $(function(){
        $('.mycoupon').click(function(){
            alert('로그인 후 이용해주세요.');
        })



        var $grid = $('.ImgList').isotope({
                itemSelector:'.ImgList>ul>li',
                layoutMode :'fitRows'
            });
            

            $('#all').click(function(){
                $grid.isotope({filter : '*'})
                $('.menuList>ul>li').removeClass('on')
                $(this).addClass('on')
            })
            $('#sale').click(function(){
                $grid.isotope({filter : '.sales'})
                $('.menuList>ul>li').removeClass('on')
                $(this).addClass('on')
            })
            $('#bur').click(function(){
                $grid.isotope({filter : '.burs'})
                $('.menuList>ul>li').removeClass('on')
                $(this).addClass('on')
            })
            $('#chi').click(function(){
                $grid.isotope({filter : '.chis'})
                $('.menuList>ul>li').removeClass('on')
                $(this).addClass('on')
            })
            $('#ice').click(function(){
                $grid.isotope({filter : '.ices'})
                $('.menuList>ul>li').removeClass('on')
                $(this).addClass('on')
            })
            // $grid.isotope({filter : '.flower'})
        })




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
    

})