$(document).ready(function(){

$('.headshot').hover(function(){

$(this).css('opacity','0.4'); 
$('dark').css('z-index', '1000');
},function(){

$(this).css('opacity','1.0');

});

$(".signup-button").click(function() {
		
window.location.href = "https://nihar14.typeform.com/to/txNhLP";
		
}); 


$(".signup-button").hover(function() {
		
		$(this).addClass('cursor');
});


$(".signup-icon").click(function() {
		
window.location.href = "https://nihar14.typeform.com/to/txNhLP";
		
}); 


$(".signup-icon").hover(function() {
		
		$(this).addClass('cursor');
});

});