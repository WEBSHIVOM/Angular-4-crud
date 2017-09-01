// Sidebar menu toggle JavaScript 
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
	$("#footerwrapper").toggleClass("toggled");
});

// Sidebar window height Get JavaScript
$('#map-container').css({
	'height': (($(window).height()) - 101) + 'px'
});
$(window).resize(function() {
	$('#map-container').css({
		'height': (($(window).height()) - 101) + 'px'
	});
});
	
//Accordion	JavaScript
function toggleChevron(e) {
	$(e.target)
		.prev('.panel-heading')
		.find("i.indicator")
		.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
	
// Table sort JavaScript	
(function () {
    var $table = $('table');
    $table.on('sorted', function () {
        console.log("Table was sorted.");
    });
}());		