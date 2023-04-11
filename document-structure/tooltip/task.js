const tipLinks = Array.from(document.getElementsByClassName('has-tooltip'));
let tip = document.createElement('div');
tip.className = 'tooltip tooltip_active';

tipLinks.forEach((item) => item.addEventListener('click', (e) => {
	e.preventDefault();
	const {bottom, left} = item.getBoundingClientRect();
	const nextEl = item.nextElementSibling;
	if (nextEl && nextEl.className.includes('tooltip_active')) {
		tip.remove();
	} else {
		tip.textContent = `${item.title}`;
		tip.style.left = `${left}px`;
		tip.style.top = `${bottom}px`;
		item.after(tip);
	}
}))

document.addEventListener('scroll', () => tip.remove());
