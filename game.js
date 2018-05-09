var date = new Date();
var d1;
var d2;
var t=0;
var width = window.innerWidth;
var height = window.innerHeight;
var w = width/2;
var stButton = document.getElementById("start");
var speedDisplay = document.getElementById("speedDisplay");
var speedDisplaySpan = document.getElementById("speedDisplaySpan");
var timeDisplay = document.getElementById("timeDisplay");
var timeDisplaySpan = document.getElementById("timeDisplaySpan");
var timerText = document.getElementById("timerText");
stButton.style.marginLeft = (w-40)+'px';
speedDisplay.style.marginLeft = (w-130)+'px';
timeDisplay.style.marginLeft = (w-130)+'px';
var i=0;
var input = document.getElementById("input");
var text = new Array();
text = document.getElementById("para").innerHTML;


function startTimer(){
  var counter = 4; 
  alert(text);
  setInterval(function() {
    counter--;
    if (counter >= 1) {
      timerText.innerHTML = counter;
    }
    if(counter == 0){
    	timerText.innerHTML = "Go!"
    }
    if(counter == -1){
    	timerText.innerHTML = "";
    	input.disabled = false;
    	d1 = date.getTime();
    }
    if(counter < -1){
    	clearInterval(counter);
    	return;
    }
    timeDisplaySpan.innerHTML = date.getTime()-d1;
  }, 1000);
}

function wordCheck(){
	document.addEventListener('keydown',function(event){
				if(Sring.fromCharCode(event.keyCode) == text[i]){ //r keyCode
					alert("Hello");
				}
			}, false);
}