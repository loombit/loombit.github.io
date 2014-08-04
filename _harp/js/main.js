// No fancy stuff here...
// Loombit 2014

// Resize Section Height to Window
$(window).resize(function() {

	var height = $(window).height();
	$('#wheight').height(height);

}).resize();

// Front Page Animations
var
	frontpage = $('.front'),
	aboutpage = $('.about'),

	headline = $('.front h2')
		.css('opacity', 0)
		.velocity({
			'opacity':[1,0],
			translateY: '10px'
		},
		{
			delay: 4500
		});

	buttonlinks = $('.front li')
		.css('opacity', 0)
		.each(function(i) {
			$(this).velocity({
				translateY: [0,20],
				'opacity' : [1,0]
			},
			{
				delay: (function() {
					return 5000 + 400*i;
				})()
			});
		});
		

// Page Sliding Animations
$('#toggleAbout').on('click', function(event) {
	$('section')
		.velocity({
			translateX: '100%'
		},{});
});

$('#toggle').on('click', function () {
	$('section').velocity('reverse');
});


