/* oyun burda bashlayir */
var score = 0;

document.addEventListener('click',function(e){

	if (e.target.className === 'rain') {
		e.target.style.display = 'none';
		var audio = new Audio('boom.mp3');
		audio.play();
		score++;
		document.getElementById('score1').innerHTML = score;
	}
});

var ballWidth;
if (screen.width >= 1100) {
	ballWidth = 40;
}
if (screen.width >= 566 && screen.width <= 1099) {
	ballWidth = 35;
}
if(screen.width <= 565){
	ballWidth = 30;
}

var GameT = true;
function Game(){

	if (GameT === false) {
		score = 0;
		document.getElementById('score1').innerHTML = 0

		document.getElementsByClassName('newgame')[0].style.display = 'none';
		document.getElementsByClassName('endgame')[0].style.display = 'none';
	}
	GameT = false;
	document.getElementsByClassName('startgame')[0].style.display = 'none';

	var i = -1;
	var timesRun = 0;
	var imgArr = ['balls/img1.png','balls/img2.png','balls/img3.png','balls/img4.png','balls/img5.png','balls/img6.png','balls/img7.png'];
	var san=30;

	var refreshId = setInterval(function(){
			timesRun += 1;
	    	if(timesRun === 60){
	       		clearInterval(refreshId);
	   		}
			
			function getRndInteger(min, max) {
	  			return Math.floor(Math.random() * (max - min + 1) ) + min;
			}

		    var gamearea = document.createElement('div');
		    gamearea.className = "rain";
		    gamearea.style.backgroundImage = 'url('+ imgArr[getRndInteger(0, imgArr.length-1)] +')';
		    document.getElementById('game-area').appendChild(gamearea);

		    i++;
		    var divWidth = document.getElementById("game-area").offsetWidth;
			var AllRains = document.getElementsByClassName('rain')[i];
			document.getElementsByClassName('rain')[i].style.marginLeft = getRndInteger(0,divWidth - ballWidth) + 'px';

			console.log()

	}, 500);

	
	var countdown = setInterval(function(){
		san--;
		if (san === 0) {
			clearInterval(countdown);
			EndGame();
		};
		document.getElementById('countdown1').innerHTML = san;
	},1000);
};


/* Oyun bitende bu function cagrilir */

var EndT = true
function EndGame(){

	if (EndT === true){
		var endofgame = document.createElement('div');
		endofgame.className = "endgame";
		document.getElementById('game-area').appendChild(endofgame);
		document.getElementsByClassName('endgame')[0].innerHTML = "OYUN BİTDİ! NƏTİCƏ: <span id='endgame1'>0</span>";

		var newgame = document.createElement('div');
		newgame.className = "newgame";
		document.getElementById('game-area').appendChild(newgame);
		document.getElementsByClassName('newgame')[0].innerHTML = 'YENİ OYUN';
	}
	else{
		document.getElementsByClassName('newgame')[0].style.display = 'block';
		document.getElementsByClassName('endgame')[0].style.display = 'block';
	}

	document.getElementById('endgame1').innerHTML = score;

	document.getElementsByClassName('newgame')[0].addEventListener('click', Game);

	document.getElementsByClassName('startgame')[0].style.display = 'none';

	var element = document.getElementById('game-area');

	for(var k = 0; k < 60; k++ ){
		element.removeChild(document.getElementsByClassName('rain')[0]);
	}
	EndT = false;
}
	
/* oyunu başlat */
function StartGame(){
	var startgame = document.createElement('div');
	startgame.className = 'startgame';
	document.getElementById('game-area').appendChild(startgame);
	document.getElementsByClassName('startgame')[0].innerHTML = 'BAŞLA!';
	document.getElementsByClassName('startgame')[0].addEventListener('click', Game);
	document.getElementsByClassName('startgame')[0].style.display = 'block'
}

StartGame();