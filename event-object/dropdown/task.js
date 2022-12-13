const dropdown = document.querySelector('.dropdown__list');
const field = dropdown.closest('.dropdown');
let buttonLangName = field.querySelector('.dropdown__value');
let options = Array.from(document.getElementsByClassName('dropdown__link'));

function switchMenu(){
	dropdown.classList.toggle('dropdown__list_active');
}

buttonLangName.addEventListener('click', switchMenu);

options.forEach(item => item.addEventListener('click', function(){
	buttonLangName.textContent = item.textContent;
	switchMenu();
	event.preventDefault();
}));