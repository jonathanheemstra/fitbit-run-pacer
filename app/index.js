import clock from "clock";
import document from "document";

let timmer = document.getElementById("timmer");
let btnBr = document.getElementById("btn-br");
let elapsedTime = {
	seconds: 0,
	minutes: 0,
	hours: 0
};

let startTime;
let isRunning = false;

clock.granularity = 'seconds';

btnBr.onactivate = function(e) {
	isRunning = !isRunning;

	clock.ontick = function(e) {
		if (!startTime) {
			startTime = e.date.getTime();
		}
		let currentTime = e.date.getTime();
	
		secondsToHms(Math.floor((currentTime - startTime) / 1000));
	
		timmer.text = `${elapsedTime.hours ? elapsedTime.hours + ':' : ''}${elapsedTime.minutes}:${elapsedTime.seconds}`;
	};
}


function secondsToHms(time) {
	elapsedTime.hours = Math.floor(time / 3600) > 0 
		? Math.floor(time / 3600)
		: null;
	elapsedTime.minutes = (`0${Math.floor(time % 3600 / 60)}`).slice(-2);
	elapsedTime.seconds = (`0${Math.floor(time % 3600 % 60)}`).slice(-2);
}