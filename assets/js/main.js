$("document").ready(function(){
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
$(function (){
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});
	// get all slides
	var slides = document.querySelectorAll("section.panel");
	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i])
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}
});
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
// $(window).scroll(function(){
// var scrollTop2 = ($(this).scrollTop())
//     if (scrollTop2 > 460) {
//     	$(".intro").fadeOut(800)
//     	$("p").fadeOut(800)
//     }else if(scrollTop2 < 460){
//     	$(".intro").fadeIn(800)
//     	$("p").fadeIn(800)
//     }
// });
// //-------------------------------------------------
// $(window).scroll(function(){
// var scrollTop2 = ($(this).scrollTop())
// 	if(scrollTop2 > 805 && scrollTop2 < 1116){

// 		$(".firstProductsOnly").fadeIn(800)
// 	}else{
// 		$(".firstProductsOnly").fadeOut(800)
// 	}
// })
// //-------------------------------------------------
// $(window).scroll(function(){
// var scrollTop2 = ($(this).scrollTop())
// 	if(scrollTop2 > 1610 && scrollTop2 < 1919){
// 		$(".secondProductsOnly").fadeIn(800)
// 	}else{
// 		$(".secondProductsOnly").fadeOut(800)
// 	}
// })
// //-------------------------------------------------
// $(window).scroll(function(){
// var scrollTop2 = ($(this).scrollTop())
// 	if(scrollTop2 > 2409 && scrollTop2 < 2677){
// 		$(".thirdProductsOnly").fadeIn(800)
// 	}else{
// 		$(".thirdProductsOnly").fadeOut(800)
// 	}
// })
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
$(".home").on("click", function(){
	$("html, body").animate({ 
		scrollTop: "0px",
		specialEasing: {
	    width: "ease",
	    height: "easeOutBounce"
    }

	},1000);
	console.log("about Button Clicked")
})
//-------------------------------------------------
$(".firstProductButton").on("click", function(){
	$("html, body").animate({ 
		scrollTop: "928%",
		specialEasing: {
	    width: "ease",
	    height: "easeOutBounce"
    }

	},1000);
	console.log("about Button Clicked")
})
//-------------------------------------------------
$(".secondProductButton").on("click", function(){
	$("html, body").animate({ 
		scrollTop: "1730%",
		specialEasing: {
	    width: "ease",
	    height: "easeOutBounce"
    }

	},1000);
	console.log("about Button Clicked")
})
//-------------------------------------------------
$(".thirdProductButton").on("click", function(){
	$("html, body").animate({ 
		scrollTop: "2532%",
		specialEasing: {
	    width: "ease",
	    height: "easeOutBounce"
    }

	},1000);
	console.log("about Button Clicked")
})
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
$(".testImage").on("click", function(){
	$(".bodyContainer").fadeTo(300, 0.4)
	$(".imageModal").fadeIn(300)
})
//-------------------------------------------------
$(".close").on("click", function(){
	$(".bodyContainer").fadeTo(300, 1)
	$(".imageModal").fadeOut(300)
})
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
$(function() {
    $(window).scroll(function() {
       var tpos =  $(document).scrollTop();
       $(".display").html(tpos)
    });
});
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
$.keyframe.define([{
    name: 'fadeIn',
    from: {'opacity': '0'},
    to: {'opacity': '1'}
},{
	name: 'fadeOut',
	from: {'opacity': '1'},
	to: {'opacity': '0'}
}]);
//-------------------------------------------------
$(window).scroll(function(){
	if($('.addCart1').visible(true)) {
 		$(".firstProductsOnly").playKeyframe({
 			name: 'fadeIn',
 			duration: "1s"
 		})
 		console.log("visible")
	} else{
		$(".firstProductsOnly").playKeyframe({
 			name: 'fadeOut',
 			duration: "1s"
 		})
 		console.log("NOT visible")
	}
});
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
























})//ready close