$(document).ready(function() {

	//利用次数算出距离
	var num = 0;


	function moveLeft() {
		var owidth = $('.img_list img')[0].offsetWidth;
		if(num < $('.img_list img').length - 1) {
			num++;
		} else {
			num = 0;
		}
		$('.img_list').animate({
			marginLeft: -owidth * num
		}, 1000);

		//按钮位置
		$('.btn_nav li').removeClass('btn_pitch');
		if(num > $('.img_list img').length - 1) { //第一个添加
			$('.btn_nav li').eq(0).addClass('btn_pitch');
		} else {
			$('.btn_nav li').eq(num).addClass('btn_pitch');
		}
	}

	t = setInterval(moveLeft, 3000);
	clearInterval(t)
	//点击按钮对应图片显示
	$('.btn_nav li').click(function() {
		var owidth = $('.img_list img')[0].offsetWidth;
		num = $(this).index();
		//让图片对应的进行播放
		$('.img_list').animate({
			marginLeft: -owidth * num
		}, 1000);
		//给按钮换类
		$('.btn_nav li').removeClass('btn_pitch').eq(num).addClass('btn_pitch');
	});
	//当鼠标悬停在此时
	$('.banner_contianer').mouseover(function() {
		clearInterval(t); //清除定时器

	})
	//当鼠标离开时
	$('.banner_contianer').mouseout(function() {
		clearInterval(t); //要执行定时器，先清除定时器
		t = setInterval(moveLeft, 3000); //开启定时器
	});

});