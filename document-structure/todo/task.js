const btn = document.getElementById('tasks__add');
const taskField = document.getElementById('task__input');
const taskContainer = document.getElementById('tasks__list')



btn.addEventListener('click', (e) => {
	e.preventDefault();
	let text = taskField.value.trim();
	if (text) {
		let taskDiv = document.createElement('div');
		taskDiv.className = 'task';
		taskDiv.innerHTML = 
			`<div class="task__title">
	        ${text}
	        </div>
	        <a href="#" class="task__remove">&times;</a>`;
		taskContainer.append(taskDiv);
	    taskField.value = '';
		let remover = taskDiv.querySelector('.task__remove');
    	remover.addEventListener('click', () => {remover.closest('.task').remove();
    });
	}
	

})

