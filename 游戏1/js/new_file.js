window.onload = function() {
	var st = document.getElementById('st');
	var over = document.getElementById('over');
	var time = 0;
	var timespace = 0;
	var timestop = 0;
	var datetime = 0;
	var grade = 0;
	var s = 0;
	var f = 0;
	var k = 0;
	var j = 0;
	var im = document.getElementsByTagName('img');

	function start_game() {
		time = document.getElementById('inp0').value;
		timespace = document.getElementById('inp1').value;
		timestop = document.getElementById('inp2').value;
		datetime = document.getElementById('datetime');
		grade = document.getElementById('grade');
		if(time == 0) {
			console.log(time + '+++time');
			alert("请设置游戏时间")
			return;
		}
		s = time * 60;
		st.disabled = true;
		st.style.background = "gray";
		over.disabled = false;
		over.style.background = "#EEC900";
		datetime.style.display = "block";

		f = setInterval(dt, 1000);

		function dt() {
			//			if(s != 0) {
			s = s - 1;
			//			}
			datetime.innerHTML = s + "秒";
			if(s == 0) {
				over_game();
			}

		}
		timespace1 = timespace * 1000;
		timestop1 = timestop * 1000;
		if(timespace1 > timestop1) {
			j = setInterval(mouse, timespace1);
		} else {
			alert("地鼠出现间隔必须大于地鼠停留的时间");
		}
//		j = setInterval(mouse, timespace1);

		for(i = 0; i < 20; i++) {
			im[i].onclick = function() {
				var f = this.src;
				console.log(f.match("img/mouse2.png") + '++++++++++++++');
				if(f.match("img/mouse2.png")) {
					k++;
					grade.innerHTML = k * 10;
					this.src = "img/mouse.png";
				}
			}
		}

	}

	function over_game() {
		clearInterval(f);
		clearInterval(j);
		datetime.style.display = "none";
		st.disabled = false;
		st.style.background = "#EEC900";
		over.disabled = true;
		over.style.background = "gray";
		for(i = 0; i < 20; i++) {
			im[i].src = "img/mouse.png";
		}
	}

	function mouse() {
		var sj = parseInt(10 * Math.random());
		im[sj].src = "img/mouse2.png";
		im[sj + sj].src = "img/mouse2.png";
		im[sj + 6].src = "img/mouse2.png";

		function datime() {
			for(i = 0; i < 20; i++) {
				im[i].src = "img/mouse.png";
			}
		}

		if(timestop1 != timespace1) {
			setTimeout(datime, timestop1);
		}

	}

	st.onclick = function() {
		if(time == 0) {
			console.log(1111);
		}

		start_game();
	}

	over.onclick = function() {
		over_game();
	}

}