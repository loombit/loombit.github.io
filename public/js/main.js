// Resize Section Height to Window

$(window).resize(function() {

	var height = $(window).height();
	height = height + -$('navbar.navbar-default').height();
	$('#wheight').height(height);

}).resize();

// Front Page Animations

// SVG Animation (D3.js)
var
	frontcanvas = d3.select('.front'),
	frontsvg = frontcanvas.append('svg')
		.attr('height', '100%')
		.attr('width', '100%')
		.style('position', 'absolute')
		.style('top', '0')
		.style('left','0'),

	logoMobile = frontcanvas.select('object.logo'),

	infotext = frontsvg.append('text')
		.attr('x', '10%')
		.attr('y', '10%'),

	headline = frontcanvas.select('h2')
		.style('bottom', '10px')
		.style('position', 'relative')
		.style('opacity', 0)
		.transition()
		.delay(4500)
		.style('bottom', '0px')
		.style('opacity', 1),

	buttonlinks = frontcanvas.select('ul').selectAll('li')
		.each(function(d,i) {
			d3.select(this)
				.style('bottom', '20px')
				.style('opacity',0)
				.transition()
				.delay(function() {return 4500 + 400*i;})
				.duration(800)
				.style('bottom', '0px')
				.style('opacity', 1);
		});

// HTML Animation

		

$('#toggleAbout').on('click', function(event) {
	d3.select('.about')
		.style('right','100%')
		.style('display','block')
		.transition()
		.duration(1000)
		.style('right','0%');

});

$('#toggle').on('click', function () {
	$(this).parents('section').fadeToggle('300');
});


