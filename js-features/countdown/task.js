const countDown = function(){
	const timer = document.getElementById("timer");
	timer.textContent = timer.textContent - 1;
	if (timer.textContent == 0) {
		alert("Вы победили в конкурсе");
		window.location.assign('https://github.com/netology-code/mq-diploma/raw/master/sources/NOEMI_mq_desktop.psd');
		clearInterval(interval);
		
	}
}

const interval = setInterval(countDown, 1000);
