$(window).scroll(function() {
	if ($(document).scrollTop() < 50) {
		$('nav').removeClass('bg-blue');
		$('nav').addClass('bg-black');
	} else {
		$('nav').removeClass('bg-black');
		$('nav').addClass('bg-blue');
	}
});

$(document).ready(function(){
	$(".navbar-brand").click(function(e){
		e.preventDefault();
		let id=$(this).attr('href');
		$("html,body").animate({
			scrollTop: 0
		}, 'slow');
	});
	$("a.nav-link").each(function(){
		$(this).click(function(e){
			e.preventDefault();
			let id=$(this).attr('href');
			$("html,body").animate({
				scrollTop: $(id).offset().top-76
			}, 'slow');
		});
	});
});
