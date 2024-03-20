<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dungeon Exploration</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #1a1a1a;
            color: white;
            margin: 0;
            padding: 0;
        }

        #dungeon-container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 2px solid #4caf50;
            border-radius: 10px;
            background-color: #333;
        }

        #dialogue {
            margin-bottom: 20px;
        }

        button {
            padding: 10px;
            margin: 5px;
            cursor: pointer;
            font-size: 16px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<div id="dungeon-container">
    <h1>Dungeon Exploration</h1>
    <div id="dialogue">You find yourself standing at the entrance of a dark dungeon.</div>
    <button onclick="startExploration()">Start Exploration</button>
</div>

<script>
    let dialogueElement = document.getElementById('dialogue');

    function startExploration() {
        showDialogue("You take a deep breath and step into the dungeon.");

        setTimeout(() => {
            showDialogue("The dungeon is dimly lit, and you can hear eerie sounds echoing.");
            showOptions(["Explore the left corridor", "Search for hidden passages", "Proceed cautiously"]);
        }, 3000);
    }

    function showDialogue(text) {
        dialogueElement.innerHTML = text;
    }

    function showOptions(options) {
        dialogueElement.innerHTML += "<p>Choose an option:</p>";
        options.forEach(option => {
            dialogueElement.innerHTML += `<button onclick="selectOption('${option}')">${option}</button>`;
        });
    }

    function selectOption(option) {
        showDialogue(`You chose: ${option}.`);

        switch (option) {
            case "Explore the left corridor":
                setTimeout(() => {
                    showDialogue("You find a dusty room with an old chest.");
                    showOptions(["Open the chest", "Continue exploring", "Retrace your steps"]);
                }, 2000);
                break;
            case "Search for hidden passages":
                setTimeout(() => {
                    showDialogue("You discover a secret passage leading to a mysterious chamber.");
                    showOptions(["Investigate the chamber", "Return to the main path", "Proceed deeper"]);
                }, 2000);
                break;
            case "Proceed cautiously":
                setTimeout(() => {
                    showDialogue("You encounter a fork in the path. Choose wisely.");
                    showOptions(["Take the right path", "Use a torch to light the way", "Listen for any sounds"]);
                }, 2000);
                break;
            case "Open the chest":
                showDialogue("The chest creaks open, revealing valuable treasures!");
                break;
            case "Continue exploring":
                showDialogue("You venture deeper into the dungeon.");
                break;
            case "Retrace your steps":
                showDialogue("You backtrack to the dungeon entrance.");
                break;
            case "Investigate the chamber":
                showDialogue("The chamber is filled with ancient artifacts.");
                break;
            case "Return to the main path":
                showDialogue("You return to the main path.");
                break;
            case "Proceed deeper":
                setTimeout(() => {
                    showDialogue("The path leads to a large cavern with a menacing creature!");
                    showOptions(["Fight the creature", "Try to sneak past", "Retreat"]);
                }, 2000);
                break;
            case "Take the right path":
                setTimeout(() => {
                    showDialogue("You find a room with a magical portal. It shimmers with unknown energy.");
                    showOptions(["Enter the portal", "Avoid the portal", "Inspect the surroundings"]);
                }, 2000);
                break;
            
            case "Use a torch to light the way":
                showDialogue("The torch reveals hidden markings on the dungeon walls.");
                break;
            case "Listen for any sounds":
                showDialogue("You hear distant footsteps. Someone or something is approaching.");
                break;
            case "Fight the creature":
                showDialogue("The battle is fierce, but you manage to defeat the creature.");
                break;
            case "Try to sneak past":
                showDialogue("You successfully sneak past the creature.");
                break;
            case "Retreat":
                showDialogue("You quickly retreat from the cavern.");
                break;
            case "Enter the portal":
                showDialogue("The portal transports you to another realm. Adventure continues!");
                window.location.href = 'http://localhost:5173/Surpris';
                break;
            case "Avoid the portal":
                showDialogue("You decide not to enter the mysterious portal.");
                break;
            case "Inspect the surroundings":
                showDialogue("You find hidden passages leading to more mysteries.");
                break;
            
            default:
                break;
        }
    }
</script>

</body>
</html>
