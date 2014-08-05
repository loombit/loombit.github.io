// No fancy stuff here...
// Loombit 2014

// Resize Section Height to Window
$(window).resize(function() {

	var height = $(window).height();
	$('#wheight').height(height);

}).resize();

// Front Page Animations
var
	headline = $('.front h2')
		.css('opacity', 0)
		.velocity({
			'opacity':[1,0],
			translateY: '10px'
		},
		{
			delay: 2000
		}),

	buttonlinks = $('.front li')
		.css('opacity', 0)
		.each(function(i) {
			$(this).velocity({
				translateY: [0,20],
				'opacity' : [1,0]
			},
			{
				delay: (function() {
					return 2200 + 400*i;
				})()
			});
		});
		

// Page Sliding Animations
$('#toggleAbout').on('click', function(event) {

	$('.front')
		.velocity({
			translateX: '100%'
		},300);
});

$('#toggle').on('click', function () {
	$('.front').velocity('reverse');
});


