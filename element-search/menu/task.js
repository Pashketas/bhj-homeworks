let menuItems = Array.from(document.getElementsByClassName('menu__item'));
for (let i = 0; i < menuItems.length; i++) {
	if (menuItems[i].querySelector('ul.menu')) {
		let link = menuItems[i].querySelector('a.menu__link');
		link.addEventListener('click', function(){
			let filtered = menuItems.filter((item) => item.querySelector('ul.menu')); 
			filtered.forEach(item => item.querySelector('ul.menu').className = 'menu menu_sub');
			menuItems[i].querySelector('ul.menu').className = 'menu menu_sub menu_active';
			event.preventDefault();
		});
	}
}