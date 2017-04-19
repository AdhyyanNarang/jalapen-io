$(document).ready(function(){

$('.button').hover(function(){
	$(this).addClass('cursor');
	$('.buttonText').addClass('noShow');
}, function(){
	$(this).removeClass('cursor');
	$('.buttonText').removeClass('noShow');
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //>=, not <=
    if (scroll >= 140) {
        //clearHeader, not clearheader - caps H
        $('.navwrapper').addClass('navScroll');
    } else {
        $(".navwrapper").removeClass('navScroll');
    }
});

});