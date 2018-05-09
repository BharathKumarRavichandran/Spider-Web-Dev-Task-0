var counter;
var date = new Date();
var d1;
var d2;
var i=0;
var len=0;//Paragraph's length by letter
var n;//No. of words in the paragraph
var t=0;
var t1;
var t2;
var input = document.getElementById("input");
var stButton = document.getElementById("start");
var speedDisplay = document.getElementById("speedDisplay");
var speedDisplaySpan = document.getElementById("speedDisplaySpan");
var text = new Array();
var test = document.getElementById("test");
var timeDisplay = document.getElementById("timeDisplay");
var timeDisplaySpan = document.getElementById("timeDisplaySpan");
var timerText = document.getElementById("timerText");
var width = window.innerWidth;
var height = window.innerHeight;
var w = width/2;

stButton.style.marginLeft = (w-40)+'px';
speedDisplay.style.marginLeft = (w-130)+'px';
timeDisplay.style.marginLeft = (w-130)+'px';

function wordCount(str) { //Function to count the no. of words in the paragraph.
  return str.split(" ").length;
}

function startTimer(){
  
  text = document.getElementById("para").innerHTML;
  counter = 4;
  len = text.length; 
  n= wordCount(text);
  
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
/*
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
}*/      
function wordCheck(){ 
          if(i==0){
            d1 = new Date();
            t1 = d1.getTime();
          }

          d2 = new Date();
          t2 = d2.getTime();
          t=t2-t1;// Time taken in milliseconds
          timeDisplaySpan.innerHTML = t/1000+" seconds";
          
          if(input.value == text[i]){
            i++;
            input.value="";
            test.style.backgroundColor = "green";
          }
          else{
            test.style.backgroundColor = "red";
            input.value="";
          }
          if(i==len-1){
            d2 = new Date();
            t2 = d2.getTime();
            t=t2-t1;// Time taken in milliseconds
            speedDisplaySpan.innerHTML = Math.round(n*1000*60/t)+" wpm";
            test.style.backgroundColor = "blue";
            input.disabled=true;
            input.value="Successfully completed!";
          }
}      