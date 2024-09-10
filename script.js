function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    
    // Create list item (task element)
    const li = document.createElement('li');

    // Create task text span
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    // Create actions div (Edit/Delete buttons)
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.onclick = function () {
        editTask(taskSpan);
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append buttons to actions div
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    // Append task text and actions to list item
    li.appendChild(taskSpan);
    li.appendChild(actionsDiv);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

function editTask(taskElement) {
    const newText = prompt("Edit your task", taskElement.textContent);
    if (newText !== null && newText.trim() !== '') {
        taskElement.textContent = newText;
    }
}
