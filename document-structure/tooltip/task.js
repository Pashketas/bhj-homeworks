const tipLinks = Array.from(document.getElementsByClassName('has-tooltip'));
let tip = document.createElement('div');
tip.className = 'tooltip';

tipLinks.forEach((item) => item.addEventListener('click', (e) => {
	const {bottom, left} = item.getBoundingClientRect();
	tip.textContent = `${item.title}`;
	tip.classList.toggle('tooltip_active')
	tip.style.left = `${left}px`;
	tip.style.top = `${bottom}px`;
	item.after(tip);
	e.preventDefault();
}))

document.addEventListener('scroll', () => tip.classList.remove('tooltip_active'));
