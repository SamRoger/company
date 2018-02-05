$("document").ready(function(){
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
		$("p, .intro").addClass("fadeClass")
	}else{
		$("p, .intro").removeClass("fadeClass")
	}
})
// //----------------------------------------------
// //----------------------------------------------
// //----------------------------------------------
// //----------------------------------------------
// $(window).scroll(function(){
// var scrollTop2 = ($(this).scrollTop())
// 	if(scrollTop2 > 1610 && scrollTop2 < 1919){
// 		$(".secondProductsOnly").fadeIn(800)
// 	}else{
// 		$(".secondProductsOnly").fadeOut(800)
// 	}
// })
// //---------------------------------------------
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
$(".mrBlurry").click(function(){
	$(".mrBlurry, .imageModal1, .aboutContainer").fadeOut(200)
})
//-------------------------------------------------
$(".closeAbout").click(function(){
	$(".aboutContainer").fadeOut(300)
		$(".imageModal").fadeOut(300)
			$(".mrBlurry").fadeOut(200)
})
//-------------------------------------------------
$(".close").click(function(){
	$(".imageModal1").fadeOut(200)
		$(".mrBlurry").fadeOut(200)
})
//-------------------------------------------------
$(".aboutButton").click(function(){
	$(".aboutContainer").fadeIn(200)
		$(".mrBlurry").fadeIn(200)

})
//-------------------------------------------------
$(".testImage1").on("click",function(){
	$(".imageModal1").fadeIn(200)
	$(".testImageModal1")[0].src = 'assets/img/1.png'
	$(".testImageModal2")[0].src = 'assets/img/2.png'
	$(".testImageModal3")[0].src = 'assets/img/3.png'
		$(".testDescriptionModal").html('Name Of Product')
			$(".productModalInfo").html('Product ONE Information Goes Here. quasi cupiditate dolores quod,rsit dignissimos deserunt vel tenetur consectetur, error saepe dicta cumque perferendis.')
				$(".mrBlurry").fadeIn(200)
})
$(".testImage2").click(function(){
	$(".imageModal1").fadeIn(300)
	$(".testImageModal1")[0].src = 'assets/img/3.png'
	$(".testImageModal2")[0].src = 'assets/img/2.png'
	$(".testImageModal3")[0].src = 'assets/img/1.png'
		$(".testDescriptionModal").html('Product Two')
			$(".productModalInfo").html('Product TWO Information Goes Here')
				$(".mrBlurry").fadeIn(200)
})
$(".testImage3").click(function(){
	$(".imageModal1").fadeIn(300)
	$(".testImageModal1")[0].src = 'assets/img/3.png'
	$(".testImageModal2")[0].src = 'assets/img/3.png'
	$(".testImageModal3")[0].src = 'assets/img/3.png'
		$(".testDescriptionModal").html('Product Three')
			$(".productModalInfo").html('Product THREE Information Goes Here')
				$(".mrBlurry").fadeIn(200)
})
$(".testImage4").click(function(){
	$(".imageModal1").fadeIn(300)
	$(".testImageModal1")[0].src = 'assets/img/4.png'
	$(".testImageModal2")[0].src = 'assets/img/4.png'
	$(".testImageModal3")[0].src = 'assets/img/4.png'
		$(".testDescriptionModal").html('Product Four')
			$(".productModalInfo").html('Product FOUR Information Goes Here')
				$(".mrBlurry").fadeIn(200)
})
$(".testImage5").click(function(){
	$(".imageModal1").fadeIn(300)
	$(".testImageModal1")[0].src = 'assets/img/5.png'
	$(".testImageModal2")[0].src = 'assets/img/5.png'
	$(".testImageModal3")[0].src = 'assets/img/5.png'
		$(".testDescriptionModal").html('Product Five')
			$(".productModalInfo").html('Product FIVE Information Goes Here')
				$(".mrBlurry").fadeIn(200)
})
$(".testImage6").click(function(){
	$(".imageModal1").fadeIn(300)
	$(".testImageModal1")[0].src = 'assets/img/6.png'
	$(".testImageModal2")[0].src = 'assets/img/6.png'
	$(".testImageModal3")[0].src = 'assets/img/6.png'
		$(".testDescriptionModal").html('Product Six')
			$(".productModalInfo").html('Product SIX Information Goes Here')
				$(".mrBlurry").fadeIn(200)
})
$(".testImage7").click(function(){
	$(".imageModal1").fadeIn(300)
	$(".testImageModal1")[0].src = 'assets/img/7.png'
	$(".testImageModal2")[0].src = 'assets/img/7.png'
	$(".testImageModal3")[0].src = 'assets/img/7.png'
		$(".testDescriptionModal").html('Product Seven')
			$(".productModalInfo").html('Product SEVEN Information Goes Here')
				$(".mrBlurry").fadeIn(200)
})
$(".testImage8").click(function(){
	$(".imageModal1").fadeIn(300)
	$(".testImageModal1")[0].src = 'assets/img/8.png'
	$(".testImageModal2")[0].src = 'assets/img/8.png'
	$(".testImageModal3")[0].src = 'assets/img/8.png'
		$(".testDescriptionModal").html('Product Eight')
			$(".productModalInfo").html('Product EIGHT Information Goes Here')
				$(".mrBlurry").fadeIn(200)
})
$(".testImage9").click(function(){
	$(".imageModal1").fadeIn(300)
	$(".testImageModal1")[0].src = 'assets/img/9.png'
	$(".testImageModal2")[0].src = 'assets/img/9.png'
	$(".testImageModal3")[0].src = 'assets/img/9.png'
		$(".testDescriptionModal").html('Product Nine')
			$(".productModalInfo").html('Product NINE Information Goes Here')
				$(".mrBlurry").fadeIn(200)
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
$(document).ready(function(){
	$(".really").fadeIn(1200)
})
$(document).ready(function(){
	setTimeout(function(){
		$(".reel").fadeIn(2500)
	},500)
})
$(document).ready(function(){
	setTimeout(function(){
		$(".ingridients").fadeIn(4000)
	},1000)
})


















})//ready close