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
var n=1;
var acc=true;
var input = document.getElementById("input");
var text = new Array();
text = document.getElementById("para").innerHTML;


function startTimer(){
  var counter = 4; 
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
/*
function wordCheck(){
	document.addEventListener('keyup',function(event){
          alert(String.fromCharCode(event.keyCode)+"  "+text[i]);    
				if(String.fromCharCode(event.keyCode) == text[i]){ //r keyCode
					alert("Hello");
          i++;
				}
			}, false);
}*/

function wordCheck(){
          //alert(text[i]+"  "+input.value);    
          if(input.value == text[i]){
            i++;
            input.value="";
            input.style.backgroundColor = "green";
          }
          else{
            input.style.backgroundColor = "red";
            input.value="";
            acc = false;

          }
}      