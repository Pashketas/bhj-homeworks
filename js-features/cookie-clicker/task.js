const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");
const clickArr = ['',''];
function clickCookie() {
	let clickTime = new Date();
	clickArr[0] = clickArr[1];
	clickArr[1] = clickTime / 1000;
	cookie.width = cookie.width*1.2;
	counter.textContent = Number(counter.textContent) + 1;
	speed.textContent = 1 / (clickArr[1] - clickArr[0]);
	setInterval(() => cookie.width = 200, 500);
}

cookie.onclick = clickCookie;


