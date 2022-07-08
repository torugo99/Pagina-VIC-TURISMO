$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.scrollup').addClass("show")
        }else{
            $('.scrollup').removeClass("show")
        }
    })
});

$('.scrollup').click(function(){
    $('html').animate({scrollTop: 0});
});