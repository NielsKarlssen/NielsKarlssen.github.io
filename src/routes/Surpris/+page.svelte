<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>In the Forest</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #2a2a2a;
            color: white;
            margin: 0;
            padding: 0;
        }

        #forest-container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 2px solid #4caf50;
            border-radius: 10px;
            background-color: #333;
        }

        #forest-image {
            max-width: 100%;
            border-radius: 50px;
            margin-bottom: 50px;
            display: none;
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

<div id="forest-container">
    <h1>Lost in the Forest</h1>
    <img id="forest-image" src="thend.gif" alt="Forest Image">
    <div id="dialogue">You find yourself deep in a mysterious forest. What will you do?</div>
    <button onclick="rest()">Rest</button>
</div>

<script>
    let dialogueElement = document.getElementById('dialogue');
    let forestImage = document.getElementById('forest-image');

    function rest() {
        showDialogue("You choose to rest in a tranquil spot within the forest. The sounds of nature surround you. The end.");
        showImage();
    }

    function showDialogue(text) {
        dialogueElement.innerHTML = text;
    }

    function showImage() {
        forestImage.style.display = 'block';
    }
</script>

</body>
</html>
