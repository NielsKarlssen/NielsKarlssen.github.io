<script>
    import { fade, fly } from 'svelte/transition';
  
    // Define parallax layers
    const layers = [0, 2, 6];
  
    // Define messages for scrollytelling
    const messages = [
      'DO NOT SCROLL',
      'I SAID DONT SCROLL',
      'I WILL SCARE YOU',
      'Just kidding, tihi',
      'Thats epic dude! bro, 99'
    ];
  
    // Initialize scroll position, message index, and fader
    let y = 0;
    let currentMessageIndex = 0;
    let fader = true;
    $: currentMessage = messages[currentMessageIndex];
    // Calculate the step size for message changes
    const step = Math.floor(600 / messages.length);

    // Function to handle scroll events
    function handleScroll() {
      const tempIndex = currentMessageIndex;
  
      // Update the message index based on scroll position
      currentMessageIndex = Math.max(0,Math.floor(y / step));
  
      // Update the fader state based on message change
      fader = currentMessageIndex === tempIndex;
    }
  </script>
  
  <svelte:window bind:scrollY={y} on:scroll={handleScroll} />
  
  <main>
    <!-- Parallax container for layers -->
    <div class="container">
      {#each layers as layer}
        <img
          style="transform: translate(0, {y < 2 ? y * layer : -y * layer / (layers.length - 1)}px)"
          src={`/image${layer}.png`}
          alt={`parallax layer ${layer}`}
        >
      {/each}
    </div>
  
    <!-- Scrollytelling text section -->
    <div class="text">
        {#if fader && currentMessageIndex > 0}
          <!-- Animate text with fly-in and fade-out transitions -->
            <div class="story" in:fly={{ y: 200, duration: 2000 }} out:fade>
                <p>You have scrolled {y} pixels</p>
                <p>{currentMessage}</p>
                <img src="jumpscare.jpg" alt="jumpscare.jpg"> 
            </div>
          {:else if currentMessageIndex === 0 }
          <p>You have scrolled {y} pixels</p>
          <p>{currentMessage}</p>
        {/if}
    </div>
  </main>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      background-color: #121212;
    }
  
    main {
      height: 1200px;
    }
 
    .story img{
        width:300px;
        bottom:0;
    }
  
    .container {
      position: relative;
      height: 100vh;
      width: 100%;
      overflow: hidden; /* Clip overflow for parallax effect */
    }
  
  
    .container img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
    }
  
    .text {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 1;
      width: 100%;
      color: white;

    }
  

  </style>
  