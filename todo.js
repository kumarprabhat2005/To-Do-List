const taskInput = document.getElementById('task-input');
        const addButton = document.getElementById('add-button');
        const taskList = document.getElementById('task-list');

        addButton.addEventListener('click', addTask);

        function addTask() {
            const taskText = taskInput.value;
            if (taskText.trim() !== '') {
                const taskItem = document.createElement('li');
                taskItem.classList.add('task-item');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', toggleTask);

                const taskTextElement = document.createElement('span');
                taskTextElement.classList.add('task-text');
                taskTextElement.textContent = taskText;

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', deleteTask);

                taskItem.appendChild(checkbox);
                taskItem.appendChild(taskTextElement);
                taskItem.appendChild(deleteButton);

                taskList.appendChild(taskItem);

                taskInput.value = '';
            }
        }

        function toggleTask(event) {
            const taskItem = event.target.parentNode;
            taskItem.classList.toggle('completed');
        }

        function deleteTask(event) {
            const taskItem = event.target.parentNode;
            taskList.removeChild(taskItem);
        }