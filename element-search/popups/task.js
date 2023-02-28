let modalWindows = Array.from(document.getElementsByClassName("modal"));
const successButton = document.querySelector("a.show-success");
let closeButtons = Array.from(document.getElementsByClassName("modal__close modal__close_times"));

window.addEventListener('load', function(){
	modalWindows[0].className = 'modal modal_active';
})

successButton.addEventListener('click', function(){
	modalWindows[0].className = 'modal';
	modalWindows[1].className = 'modal modal_active';
})

closeButtons.forEach(item => item.addEventListener('click', function(){
	modalWindows.forEach(item => item.className = 'modal'); 
}));