$("document").ready(function(){
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
// //-------------------------------------------------
// //-------------------------------------------------
// //-------------------------------------------------
$.keyframe.define([{
    name: 'fadeIn',
    from: {'opacity': '0'},
    to: {'opacity': '1'}
},{
	name: 'fadeOut',
	from: {'opacity': '1'},
	to: {'opacity': '0'}
},{
	name: 'moveUp',
	from: {'bottom': '0px'},
	to: {'bottom': '30px'}
}]);
// //-------------------------------------------------
// //-------------------------------------------------
// //-------------------------------------------------
// //-------------------------------------------------
$(window).scroll(function(){
if($(".addCart1").visible(true)){
	$(".firstProductsOnly").playKeyframe({
 			name: 'fadeIn',
 			duration: '1s'
 		})
	}else{
		$(".firstProductsOnly").playKeyframe({
 			name: 'fadeOut',
 			duration: "1s"
 		})
	}
})
// //-------------------------------------------------
$(window).scroll(function(){
if($(".addCart4").visible(true)){
	$(".secondProductsOnly").playKeyframe({
 			name: 'fadeIn',
 			duration: "1s"
 		})
	}else{
		$(".secondProductsOnly").playKeyframe({
 			name: 'fadeOut',
 			duration: "1s"
 		})
	}
})
// //-------------------------------------------------
$(window).scroll(function(){
if($(".addCart7").visible(true)){
	$(".thirdProductsOnly").playKeyframe({
 			name: 'fadeIn',
 			duration: "1s"
 		})
	}else{
		$(".thirdProductsOnly").playKeyframe({
 			name: 'fadeOut',
 			duration: "1s"
 		})
	}
})
// //-------------------------------------------------
$(window).scroll(function(){
if($(".testImage").visible(true)){
	$("p, .intro").playKeyframe({
 			name: 'fadeOut',
 			duration: "1s"
 		})
	}else{
		$("p, .intro").playKeyframe({
 			name: 'fadeIn',
 			duration: "1s"
 		})
	}
})
// //-------------------------------------------------
// //-------------------------------------------------
// //-------------------------------------------------
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
//-------------------------------------------------
$(window).scroll(function(){

});
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
$(".home").on("click", function(){
	$(".hero").scrollintoview({
		duration: 800
	})
})
//-------------------------------------------------
$(".firstProductButton").on("click", function(){
	$(".firstProductContainer").scrollintoview({
		duration: 800
	})
})
//-------------------------------------------------
$(".secondProductButton").on("click", function(){
	$(".secondProductContainer").scrollintoview({
		duration: 800
	})
})
//-------------------------------------------------
$(".thirdProductButton").on("click", function(){
	$(".thirdProductContainer").scrollintoview({
		duration: 800
	})
})
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
$(".testImage").on("click", function(){
	$(".bodyContainer").fadeTo(300, 0.4)
	$(".imageModal").fadeIn(300)
})
//-------------------------------------------------
$(".closeAbout").on("click", function(){
	$(".aboutContainer").fadeOut(300)
	$(".imageModal").fadeOut(300)
})
//-------------------------------------------------
$(".aboutButton").on("click", function(){
	$(".aboutContainer").fadeIn(300)
})
//-------------------------------------------------
$(".close").on("click", function(){
	$(".imageModal").fadeOut(300)
})
//-------------------------------------------------
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
//-------------------------------------------------
$(window).scroll(function(){
	if($('.addCart1').visible(true)) {
 		$(".firstProductsOnly").playKeyframe({
 			name: 'fadeIn',
 			duration: "1s"
 		})
	} else{
		$(".firstProductsOnly").playKeyframe({
 			name: 'fadeOut',
 			duration: "1s"
 		})
	}
});
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
























})//ready close