$(function(){
$('.close').click(function(){
        $('.oderpop,.oderpopback').hide();
        $('body').css('overflow','auto');
    })
 
    $('button').click(function(){
        $('.oderpop,.oderpopback').show();
        $('body').css('overflow','hidden');
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

    let smallList = document.getElementsByClassName("small");
    let coffee = document.querySelector(".big");
    for (let i = 0; i < smallList.length; i++) {
      smallList[i].addEventListener("click", () => {
        coffee.src = smallList[i].src;
      });
    }
    $('.header1>h1').click(function(){
      $('.menu').slideToggle()
  })
  $('.menu>.menuClose').click(function(){
      $('.menu').slideUp()
  })


    $('.go').click(function(){
        $('.text').slideToggle()
    })
    
})