$(document).ready(function(){
    // menu
    $('.menu').click(function(){
        $('.menu').toggleClass('active')
        $('.close').toggleClass('active')
        $('.menu-wapper').toggleClass('active')
    })
    // weather section-two
    $('.more').click(function(){
        $('.back').addClass('active-1')
    })
    $('.go-back').click(function(){
        $('.back').removeClass('active-1')
    })
})