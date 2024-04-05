$(function(){
   

    $('.header1>h1').click(function(){
        $('.menu').slideToggle()
    })
    $('.menu>.menuClose').click(function(){
        $('.menu').slideUp()
    })

})