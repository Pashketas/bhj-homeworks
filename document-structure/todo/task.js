const btn = document.getElementById('tasks__add');
const taskField = document.getElementById('task__input');
const taskContainer = document.getElementById('tasks__list')



btn.addEventListener('click', () => {
	let text = taskField.value.trim();
	if (text) {
		taskContainer.innerHTML += `
			<div class="task">
	            <div class="task__title">
	                ${text}
	            </div>
	            <a href="#" class="task__remove">&times;</a>
	        </div>`;
	    taskField.value = '';
	}
	const tasks = Array.from(document.getElementsByClassName('task'));
    const removers = Array.from(document.getElementsByClassName('task__remove'));
    removers.forEach((item, index) => item.addEventListener('click', (e) => {
            	tasks[index].remove();
            	e.preventDefault();
            }));
})


taskField.addEventListener('keydown', (e) => {
	let text = taskField.value.trim();
	if (text&&(e.keyCode === 13)) {
		taskContainer.innerHTML += `
			<div class="task">
                <div class="task__title">
	                ${text}
	            </div>
	            <a href="#" class="task__remove">&times;</a>
	        </div>`;
	    taskField.value = '';
	    const tasks = Array.from(document.getElementsByClassName('task'));
        const removers = Array.from(document.getElementsByClassName('task__remove'));
        removers.forEach((item, index) => item.addEventListener('click', (e) => {
                	tasks[index].remove();
                	e.preventDefault();
                }))
	}
});
