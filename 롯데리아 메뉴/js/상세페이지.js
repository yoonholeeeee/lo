$(function(){
    
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
        $('.container').css('height')
    })





})

