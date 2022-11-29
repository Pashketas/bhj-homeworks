const deadMoles = document.getElementById("dead");
const misses = document.getElementById("lost");
getHole = index => document.getElementById(`hole${index}`)


for (let i = 1; i < 10; i++) {
	hole = getHole(i);
	hole.addEventListener('click', function (){
		if (hole.className.includes("hole_has-mole")) {
		deadMoles.textContent = Number(deadMoles.textContent) + 1;
			if (deadMoles.textContent == 10) {
				alert("Поздравляю! Вы победили!");
				deadMoles.textContent = 0;
				misses.textContent = 0;
			}
		} else {
		misses.textContent = Number(deadMoles.textContent) + 1;
			if (misses.textContent == 5) {
				alert("Вы проиграли! Удачи в следующий раз");
				deadMoles.textContent = 0;
				misses.textContent = 0;
			}
		}
	});
}

