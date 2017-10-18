$("document").ready(function(){




$(".home").on("click", function(){
	$(".hero").scrollintoview({
		duration: 800,
	});
	console.log(scrollTop)
})
//-------------------------------------------------
$(".firstProductButton").on("click", function(){
	$(".firstProductContainer").scrollintoview({
    	duration: 800,
	});
})
//-------------------------------------------------
$(".secondProductButton").on("click", function(){
	$(".secondProductContainer").scrollintoview({
		duration: 800,
	});
})
//-------------------------------------------------
$(".thirdProductButton").on("click", function(){
	$(".thirdProductContainer").scrollintoview({
		duration: 800,
	});
})
//-------------------------------------------------
$('.slick-slider-exp1').slick({
	autoplay: true,
	autoplaySpeed: 30000,
	arrows: true,
	dots: true,
	mobileFirst: true,
	prevArrow: '<span class="slick-prev">&lt;</span>',
	nextArrow: '<span class="slick-next">&gt;</span>',
	slidesToShow: 1,
	slidesToScroll: 1
});
//-------------------------------------------------



























































})//ready close