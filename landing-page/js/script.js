$(function(){
	var d = new Date();
	d.setTime(1445824740*1000); // from: 10/25/2015 00:00 pm -0300
	$('.clock-builder-output').countdown(d, function(event) {
		$(this).html(event.strftime('%H:%M:%S'));
	});
});