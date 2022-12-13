let tabs = Array.from(document.getElementsByClassName('tab'));
let tabContents = Array.from(document.getElementsByClassName('tab__content'));

function deactivateTab(position) {
	tabs[position].className = 'tab';
	tabContents[position].className = 'tab__content';
}
function activateTab(position) {
	tabs[position].className = 'tab tab_active';
	tabContents[position].className = 'tab__content tab__content_active';
}
tabs.forEach((item, index) => item.addEventListener('click', function(){
	let activeIndex = tabs.findIndex((item) => item.className === 'tab tab_active');
	deactivateTab(activeIndex);
	activateTab(index);
}))