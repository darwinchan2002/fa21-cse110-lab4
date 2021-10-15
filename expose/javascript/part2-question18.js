function showTime() {
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}

setInterval(showTime, 1000);