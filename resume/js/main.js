$(document).ready(function() {
	$(window).scroll(function() {
		if($('.navbar').offset().top > 50) {
			$('.navbar-fixed-top').addClass('top-nav-collapse');
		} else {
			$('.navbar-fixed-top').removeClass('top-nav-collapse');
		}
	});
	// Testimonial Slider
	$('a.page-scroll').click(function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 40
				}, 900);
				return false;
			}
		}
	});

	/*====================================
	Show Menu on Book
	======================================*/
	$(window).bind('scroll', function() {
		var navHeight = $(window).height() - 100;
		if($(window).scrollTop() > navHeight) {
			$('.navbar-default').addClass('on');
		} else {
			$('.navbar-default').removeClass('on');
		}
	});
	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 80
	});
	//	//导航跳转效果插件
	//	$('.nav').singlePageNav({
	//		offset: 60
	//	});
	//小屏幕下点击子菜单后隐藏菜单 
	$('.navbar-collapse a').click(function() {
		$('.navbar-collapse').collapse('hide');
	});
});