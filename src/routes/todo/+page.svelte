<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            display: auto;
            justify-content: center;
            align-items: auto;
            height: 100vh;
            background-image: url('https://www.cajp.se/pidd/content/images/org-burgare-ost-avokado.jpg');
            background-size: cover;
            background-position: center;
        }

        .container {
            width: 80vw;
            height: 70vh;
            background-color: lightgray;
            border: 10px solid darkgray;
            border-radius: 10px;
            padding-top: 10px;
            margin: auto;
        }

        .layout {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
        }

        .task-container {
            display: grid;
            width: 100%;
            grid-template-columns: 1fr;
            gap: 10px;
        }

        input {
            width: calc(100% - 20px);
            padding: 8px;
            border: 1px solid darkgray;
            border-radius: 5px;
            transition: border-color 0.5s, background-color 0.5s;
        }

        input:hover {
            border-color: #3498db;
        }

        .btn {
            line-height: 20px;
            height: 20px;
            text-align: center;
            width: 100px;
            cursor: pointer;
            position: relative;
        }

        .btn span {
            z-index: 2;
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .btn::before,
        .btn::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.5s;
            border: 1px solid rgba(255,255,255,0.2);
            background-color: rgba(0, 0, 0,0.1);
        }

        .btn::before {
            transform: rotate(180deg);
        }

        .btn::after {
            transform: rotate(180deg);
        }

        .btn:hover::before,
        .btn:hover::after {
            transform: rotate(0deg);
            background-color: rgba(255,255,255,0);
        }

        .task-list {
            list-style-type: none;
            padding: 0;
        }

        .task-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }

        .task-item span {
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>TODO LIST</h1>
        <div class="layout">
            <div class="task-container" style="border-right: 1px solid darkgray;">
                <h2>Nya Uppgifter</h2>
                <input type="text" id="newTaskInput" placeholder="Lägg till ny uppgift">
                <div class="btn" onclick="addTask()"><span>Lägg till</span></div>
                <ul class="task-list" id="newTaskList"></ul>
            </div>
            <div class="task-container">
                <h2>Färdiga Uppgifter</h2>
                <ul class="task-list" id="completedTaskList"></ul>
            </div>
        </div>
    </div>

    <script>
        function addTask() {
            const newTaskInput = document.getElementById("newTaskInput");
            const newTaskList = document.getElementById("newTaskList");

            if (newTaskInput.value.trim() !== "") {
                const taskItem = document.createElement("li");
                taskItem.className = "task-item";
                taskItem.innerHTML = `
                    <span>${newTaskInput.value}</span>
                    <div class="btn" onclick="completeTask(this)"><span>Markera som klar</span></div>
                `;
                newTaskList.appendChild(taskItem);
                newTaskInput.value = "";
            }
        }

        function completeTask(button) {
            const completedTaskList = document.getElementById("completedTaskList");
            const taskItem = button.parentNode;
            taskItem.removeChild(button); // Remove the "Markera som klar" button
            completedTaskList.appendChild(taskItem);
        }
    </script>
</body>
</html>
