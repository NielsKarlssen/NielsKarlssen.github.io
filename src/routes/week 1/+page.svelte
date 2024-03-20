<script>
    let letterString = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("");
    let letters = [];
    let username = "";
  
    for (let letter of letterString) {
      letters.push({ letter: letter, top: Math.random() * 500, left: Math.random() * 500 });
    }
  
    function addLetter(letter, i) {
      username += letter;
      letters[i].top = Math.random() * 500;
      letters[i].left = Math.random() * 500;
      letters = [...letters];
    }
  
    setInterval(() => {
     
    }, 2000);
  </script>
  
  <h1>Logga in som {username}</h1>
  <div class="container">
    {#each letters as { letter, top, left }, i}
      <button on:click={() => addLetter(letter, i)} style="position: absolute; top: {top}px; left: {left}px;">{letter}</button>
    {/each}
  </div>
  
  <style>
    .container {
      background-color: black;
      width: 500px;
      height: 500px;
      margin: auto;
      border-width: 5px;
      border-style: double;
      position: relative; 
    }
  
    button {
      background-color: white;
    }
  </style>
  