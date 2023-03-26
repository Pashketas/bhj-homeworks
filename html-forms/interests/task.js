const interestsList = Array.from(document.querySelectorAll('.interests_active'));
const elements = Array.from(document.querySelectorAll('.interests_active .interest__check'));
const mainCheckboxes = Array.from(document.querySelectorAll('.interests_main > ul > li > label > .interest__check'));

function checkActivate(arr){
	let result = arr.every((item) => item.checked);
	return result;
}

/*function setChecked(arr){
	arr.forEach((item) => {
		const elementsOfList = Array.from(item.querySelectorAll('.interest__check'));
		console.log(elementsOfList);
		const mainCheck = item.closest('.interest').querySelector('.interest__check');
		if (checkActivate(elementsOfList)) {
			mainCheck.checked = true;
		} else {
			mainCheck.checked = false;
		}
	})
}
elements.forEach((item) => item.addEventListener('change', setchecked(interestsList)));
*/

function setChecked(){
	interestsList.forEach((item) => {
		const elementsOfList = Array.from(item.querySelectorAll('.interest__check'));
		const mainCheck = item.closest('.interest').querySelector('.interest__check');
		if (checkActivate(elementsOfList)) {
			mainCheck.checked = true;
		} else {
			mainCheck.checked = false;
		}
	});
}

function setCheckedMain(){
	mainCheckboxes.forEach((item) => {
		const elementsOfList = Array.from(item.closest('.interest').querySelectorAll('ul .interest__check'));
		if (item.checked) {
			elementsOfList.forEach((el) => el.checked = true);
		} else {
			elementsOfList.forEach((el) => el.checked = false);
		}
	});
}

elements.forEach((item) => item.addEventListener('change', setChecked));
mainCheckboxes.forEach((item) => item.addEventListener('change', setCheckedMain));


