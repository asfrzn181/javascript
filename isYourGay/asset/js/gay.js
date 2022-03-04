/**
 * @author Asfarezhan <asfarezhan67@gmail.com>
 * */
function yes() {
		//document.getElementById('content').classList.add("video-container");
		x = document.getElementById('content').innerHTML += "<video autoplay loop id='myVideo'> <source src='asset/video/roll.mp4' type='video/mp4'></video>";
		return x
	}
	function no() {
		let min = -300;
		x = document.getElementById('noOption');
		let max = 300;
		const pos = [];
		for (let i=0;i<4;i++){
			pos[i] =+ Math.floor(Math.random() * (max - min)) + min;
		}

		x.style = "position:relative; left:"+pos[0]+"px; top:"+pos[1]+"px;right:"+pos[2]+"px;bottom:"+pos[3]+"px";
		return x.style
	}
