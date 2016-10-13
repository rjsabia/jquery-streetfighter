
// This function activates ryo when hovered
$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	// This function is for ryo when clicked
	// He gets into throw with hadouken fireball
	.mousedown(function() {
		// console.log('mousedown')
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
	})
	// This returns ryu to ready position
	.mouseup(function() {
		// console.log('mouseup')
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});
// ***************************************


