

var startTime,
    stopTime,
    running=false;
    timerId;

function run(){
	if(running){
		return;
	}

	running=true;
	if(stopTime)stopTime;{
     startTime=startTime+(new Date()).getTime()-stopTime;
	}
	if(!startTime){
startTime=(new Date()).getTime();
}

  timer();

};
function timer(){
document.getElementById('sec').innerHTML=(((new Date()).getTime()-
startTime)/1000).toFixed(2);
timerId=setTimeout(function(){
timer();
},100);

}
function stop(){
	if(!running){
		return false;
	}
	running=false;
clearTimeout(timerId);
stopTime=(new Date()).getTime();

};
function reset(){
	if(running){
		return;
	};
startTime=undefined;

document.getElementById('sec').innerHTML='0.00';
};
