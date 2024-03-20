<!-- StylishDungeonLogin.svelte -->
<script>
    let collectedLetters = [];
    let dialogueText = "Halt! In order to enter the dungeon, you must give me the password, letter by letter. The password is secret.";
    const possibleResponses = [
      "Alright, here is the letter ",
      "Interesting. Here's ",
      "I see, take ",
      "Alright, take the letter ",
    ];
  
    function getRandomResponse(letter) {
      const randomIndex = Math.floor(Math.random() * possibleResponses.length);
      return `${possibleResponses[randomIndex]}'${letter}'.`;
    }
  
    function askForLetter(letter) {
      // Simulate grumpiness and random deletion
      if (Math.random() < 0.3) {
        deleteRandomLetter();
        dialogueText = "Nope, I am not giving you that one!";
      } else {
        dialogueText = getRandomResponse(letter);
        collectedLetters = [...collectedLetters, letter];
      }
    }
  
    function deleteRandomLetter() {
      if (collectedLetters.length > 0) {
        const randomIndex = Math.floor(Math.random() * collectedLetters.length);
        collectedLetters.splice(randomIndex, 1);
      }
    }
    
  
    function login() {
      const enteredWord = collectedLetters.join('').toLowerCase();
  
      if (enteredWord === "secret") {
        alert("Welcome, traveler!");
        window.location.href = 'http://localhost:5173/Date';
      } else {
        alert("Skidaddle outta here!");
        resetDialogue();
      }
    }
  
    function resetDialogue() {
      collectedLetters = [];
      dialogueText = "I do not have the time for this tomfoolery";
    }
  </script>
  
  <main>
    <h1 class="title">🗝️ Dungeon Login 🏰</h1>
    <img src="dungeonman3.gif" alt="Dungeon Image" class="dungeon-image" />
  
  
    <div class="dialogue-box">
      <p>{dialogueText}</p>
    </div>
  
    <div class="letter-buttons">
      {#each 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' as letter}
        <button on:click={() => askForLetter(letter)}>Ask for '{letter}'</button>
      {/each}
    </div>
  
    <div class="entered-word">
      Entered word: {collectedLetters.join('')}
    </div>
  
    <button on:click={login} class="login-button">Unlock</button>
  </main>
  
  <style>
    main {
      text-align: center;
      margin-top: 50px;
      background-color: #1a1a1a;
      color: #fff;
      font-family: 'Cinzel', papyrus;
      padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    
  
    .title {
      font-size: 2em;
      margin-bottom: 20px;
    }
  
    .dialogue-box {
      margin: 20px 0;
      padding: 15px;
      border: 2px solid #4caf50;
      background-color: #333;
      border-radius: 10px;
    }
  
    .letter-buttons {
      margin-bottom: 20px;
    }
  
    button {
      margin: 5px;
      cursor: pointer;
      background-color: #4caf50;
      color: #fff;
      border: none;
      padding: 10px;
      font-size: 1em;
      border-radius: 5px;
    }
  
    .entered-word {
      margin-top: 10px;
      font-size: 1.2em;
    }
  
    .login-button {
      background-color: #333;
    }
    
  .dungeon-image {
    width: 50%;
    max-height: 600px; 
    object-fit: fill; 
    border-radius: 10px;
    
  }
  </style>
  