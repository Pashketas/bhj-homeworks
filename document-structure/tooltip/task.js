const tipLinks = Array.from(document.getElementsByClassName('has-tooltip'));
let tip = document.createElement('div');

tipLinks.forEach((item) => item.addEventListener('click', (e) => {
	const {bottom, left} = item.getBoundingClientRect();
	tip.textContent = `${item.title}`;
	tip.className = 'tooltip tooltip_active';
	tip.style.left = `${left}px`;
	tip.style.top = `${bottom}px`;
	item.appendChild(tip);
	e.preventDefault();
}))

document.addEventListener('scroll', () => tip.classList.remove('tooltip_active'));
