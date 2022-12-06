const deadMoles = document.getElementById("dead");
const misses = document.getElementById("lost");
getHole = index => document.getElementById(`hole${index}`)
let holes = [];
function result(text){
	alert(text);
	deadMoles.textContent = 0;
	misses.textContent = 0;
}

for (let i = 1; i < 10; i++) {
	holes.push(getHole(i));
}

holes.forEach(item => item.addEventListener('click', function (){
	if (item.className.includes("hole_has-mole")) {
		deadMoles.textContent = Number(deadMoles.textContent) + 1;
	} else {
		misses.textContent = Number(deadMoles.textContent) + 1;
	}
	if (Number(deadMoles.textContent) >= 10) {
		result("Поздравляю! Вы победили!");
	} else if (Number(misses.textContent) >= 5) {
		result("Вы проиграли! Удачи в следующий раз");
	}
}));


