$(document).ready(function(){
	// Drop Down Menu languges
	$(".languages").on("click", function() {
		$(".drop-menu-lang").slideToggle()
	})

	// Button Log in of steam to show popup log in
	$(".register").on("click", function() {
		$(".popup-login").fadeIn()
	})
	// Button close popup log in
	$(".popup-login .inner-popup-login button").on("click",function() {
		$(".popup-login").fadeOut()
	})

	// Icon Chat
	$(".chat-icon").on("click", function() {
		$("aside").slideDown();
	})
	$(".close-chat").on("click", function() {
		$("aside").slideUp()
	})

	// Active
	$(".questeion").click(function(){
		$(this).toggleClass("active")
	})
	// Button CLose
	$(".close").click(function() {
		$("aside").slideUp()
	})
	$(".chat-icon").click(function() {
		$("aside").slideDown()
	})
})
