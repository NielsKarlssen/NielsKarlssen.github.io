<script>
    let player1Top = 0;
    let player1Left = 0;
    let player2Top = 0;
    let player2Left = 0;
    let containerRotation = 0; 
    const moveDistance = 10;
    const containerSize = 500;
    let hue = 0;

    function onKeyDown(e) {
        switch (e.key) {

            case 'w':
            case 'W':
                if (player1Top > 0) {
                    player1Top = Math.max(player1Top - moveDistance, 0);
                }
                break;
            case 's':
            case 'S':
                if (player1Top < containerSize - 50) {
                    player1Top = Math.min(player1Top + moveDistance, containerSize - 50);
                }
                break;
            case 'a':
            case 'A':
                if (player1Left > 0) {
                    player1Left = Math.max(player1Left - moveDistance, 0);
                }
                break;
            case 'd':
            case 'D':
                if (player1Left < containerSize - 50) {
                    player1Left = Math.min(player1Left + moveDistance, containerSize - 50);
                }
                break;

            case 'ArrowUp':
                if (player2Top > 0) {
                    player2Top = Math.max(player2Top - moveDistance, 0);
                }
                break;
            case 'ArrowDown':
                if (player2Top < containerSize - 50) {
                    player2Top = Math.min(player2Top + moveDistance, containerSize - 50);
                }
                break;
            case 'ArrowLeft':
                if (player2Left > 0) {
                    player2Left = Math.max(player2Left - moveDistance, 0);
                }
                break;
            case 'ArrowRight':
                if (player2Left < containerSize - 50) {
                    player2Left = Math.min(player2Left + moveDistance, containerSize - 50);
                }
                break;

            case ' ':
                containerRotation += 45; 
                document.querySelector('.main-container').style.transform = `rotate(${containerRotation}deg)`;
                break;

            default:
                break;
        }

        
        checkCollisionAndChangeColor(player1Top, player1Left, '.player1');
        checkCollisionAndChangeColor(player2Top, player2Left, '.player2');
    }

    function checkCollisionAndChangeColor(top, left, playerClass) {
        if (top === 0 || top === containerSize - 50 || left === 0 || left === containerSize - 50) {
            
            hue = (hue + 180) % 360; 
            document.querySelector(playerClass).style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
        }
    }

    function updateBackgroundColor() {
        hue = (hue + 1) % 360;
        document.body.style.backgroundColor = `hsl(${hue}, 50%, 10%)`;
        requestAnimationFrame(updateBackgroundColor);
    }
    import { onMount } from "svelte/internal";
    onMount(()=>{
          updateBackgroundColor();
    })
  
</script>

<style>
    .main-container {
        width: 500px;
        height: 500px;
        border: solid rgb(0, 0, 0) 1px;
        margin: 10px auto;
        position: relative;
        transition: transform 0.2s; 
    }

    .player1 {
        width: 50px;
        height: 50px;
        position: absolute;
        transition: top 0.2s, left 0.2s;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        background-color: blue;
    }

    .player2 {
        width: 50px;
        height: 50px;
        position: absolute;
        transition: top 0.2s, left 0.2s;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        background-color: red;
    }
</style>

<main class="main-container" tabindex="0" on:keydown|preventDefault={onKeyDown}>
    <div class="player1" style="left: {player1Left}px; top: {player1Top}px"></div>
    <div class="player2" style="left: {player2Left}px; top: {player2Top}px"></div>
</main>
