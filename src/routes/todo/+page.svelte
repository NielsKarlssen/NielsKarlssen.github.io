<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task List</title>
</head>
<body>

    <h2>Task List</h2>

    <ul id="taskList">
        <!-- Tasks will be added here dynamically -->
    </ul>

    <input type="text" id="newTask" placeholder="Add a new task">
    <button onclick="addTask()">Add Task</button>

    <script>
        let tasks = [];

        function addTask() {
            const newTaskInput = document.getElementById('newTask');
            const taskText = newTaskInput.value.trim();

            if (taskText !== '') {
                const task = {
                    id: Date.now(),
                    text: taskText,
                    completed: false
                };

                tasks.push(task);
                newTaskInput.value = ''; // Clear the input field

                renderTasks();
            }
        }

        function toggleTaskCompletion(taskId) {
            const task = tasks.find(task => task.id === taskId);
            if (task) {
                task.completed = !task.completed;
                renderTasks();
            }
        }

        function removeCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            renderTasks();
        }

        function renderTasks() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';

            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                        onchange="toggleTaskCompletion(${task.id})">
                    ${task.text}
                `;

                taskList.appendChild(listItem);
            });

            const removeCompletedButton = document.createElement('button');
            removeCompletedButton.textContent = 'Remove Completed Tasks';
            removeCompletedButton.onclick = removeCompletedTasks;
            taskList.appendChild(removeCompletedButton);
        }

        // Initial rendering
        renderTasks();
    </script>

</body>
</html>
