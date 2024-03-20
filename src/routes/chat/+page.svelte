<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";

  let eliza = new ElizaBot();

  let chat = [{ user: "eliza", text: eliza.getInitial() }];

  async function write(message) {
    // TODO: yeet in the new message
    chat = [...chat, { user: "user", text: message }];

        //Hämta HTML-elementet med id:et visible
    var element = document.getElementById("visible");
    //Ändrar elementets CSS-egenskap display till default
    element.style.display = "flex"; // Visa elementet
    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none";
    var reply = eliza.transform(message);
    chat = [...chat, { user: "eliza", text: reply }];

    // TODO: write the text

  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />

  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    {#each chat as message}
      <article class="{message.user === 'user' ? 'user-message' : 'eliza-message'}">
        <span>{message.user}: {message.text}</span>

      </article>
    {/each}


    <article id="visible">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </article>
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);
      form.reset()
      // TODO: reset the form using form.reset()
    }}
  >
    <input type="text" name="text" />
  </form>
</div>


<style>
  #visible {
      width: 100px;
      height: 60px;
      padding: 0;
      display: none;
      justify-content: center;
      align-items: center;
    }

    .circle {
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #666c6f; 
      display: inline-block;
      margin-right: 8px;
      animation-name: typing;
      animation-duration: 1000ms;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      }




      @keyframes typing {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.4);
        }
        100% {
          transform: scale(1);
        }
      }
      
      .circle:nth-child(1) {
      animation-delay: 0ms; 
      }
     
      .circle:nth-child(2) {
      animation-delay: 333ms; 
      }
      
      .circle:nth-child(3) {
      animation-delay: 666ms; 
      }


      .user-message {
        text-align: right;
        margin-left: 10%; 
      }


      .eliza-message {
        text-align: left;
        margin-right: 10%; 
      }


</style>