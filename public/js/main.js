// Resize Section Height to Window

$(window).resize(function() {

	var height = $(window).height();
	height = height + -$('navbar.navbar-default').height();
	$('section').height(height);

}).resize();

// Front Page Animations

var
	frontcanvas = d3.select('.front'),
	frontsvg = frontcanvas.append('svg')
		.attr('height', '100%')
		.attr('width', '100%')
		.style('position', 'absolute')
		.style('top', '0'),

	logoMobile = frontcanvas.select('object.logo'),

	circleData = [0, 1, 2, 3],
	circlegroup = frontsvg.append('g')
		.style('opacity', 0),
	circles = circlegroup.selectAll('circle')
		.data(circleData)
		.enter()
		.append('circle')
		.attr('cx', function(d) {return d*30+ '%';})
		.attr('r', 25)
		.style('fill', '#000'),

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
		.style('opacity', 1);

$('#toggleAbout').on('click', function(event) {
	$('.about').fadeToggle(300);
});


$(window).on('mousemove', function(event) {

	circlegroup.transition()
		.attr('transform',function() {
			return 'translate('+ (event.pageX*0.1)+',' +(event.pageY*0.1) +')';
		})
		.style('opacity', 0.4)
		.duration(3000)
		.ease('elastic');


	infotext.text(function() {
		return 'X: ' + event.pageX +' Y: ' + event.pageY ;
	});

});



