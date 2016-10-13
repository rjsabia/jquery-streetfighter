
// This function activates ryo when hovered
$(document).ready(function() {
	// $('.ryu').mouseenter(function() {
	// 	$('.ryu-still').hide();
	// 	$('.ryu-ready').show();
	// })
	// .mouseleave(function() {
	// 	$('.ryu-ready').hide();
	// 	$('.ryu-still').show();
	// })
	// // This function is for ryo when clicked
	// // He gets into throw with hadouken fireball
	// .mousedown(function() {
	// 	// console.log('mousedown')
	// 	// play hadouken sound
	// 	playHadouken();
	// 	$('.ryu-ready').hide();
	// 	$('.ryu-throwing').show();
	// 	$('.hadouken').finish().show().animate( 
	// 		{'left': '1020px'},
	// 		500,
	// 		function() {
	// 			$('.hadouken').hide();
	// 			$('.hadouken').css('left', '610px');
	// 		}
	// 	);
	// })
	// // This returns ryu to ready position
	// .mouseup(function() {
	// 	// console.log('mouseup')
	// 	$('.ryu-throwing').hide();
	// 	$('.ryu-ready').show();
	// });
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			// this is where music function go's
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(e) {
		if (e.keyCode == 88) {
			// $('ryu-still').show();
			$('.ryu-ready').show();
			$('.ryu-cool').hide();
		 }
	});
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

// ***************************************


