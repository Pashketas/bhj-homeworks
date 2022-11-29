const countDown = function(){
	const timer = document.getElementById("timer");
	timer.textContent = timer.textContent - 1;
	if (timer.textContent == 0) {
		alert("Вы победили в конкурсе");
		clearInterval(interval);
	}
}

const interval = setInterval(countDown, 1000);
