<script>
  let cards = [];
  for (let index = 0; index < 12; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card
      img: `/image${index%6}.png`, // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    });
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(cards)



  let redPlayerScore = 0;
  let bluePlayerScore = 0;
  let blue_turn =true;
  let flipcount = 0;
  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (!card.flipped && flipcount < 2) {
      card.flipped = true;
      flipcount++;
      cards = cards
      
  
      // TODO: Probably do what?

      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        let flippedC = [] 
        flippedC = cards.filter((value)=>value.flipped==true && value.completed==false)

        //TODO check if cards the same 
        if (flippedC[0].img === flippedC[1].img  ){
          flippedC[0].completed =true
          flippedC[1].completed =true
          if (blue_turn) {
            bluePlayerScore++;
          } else {
            redPlayerScore++;
          }
        }
      
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cards = cards;
          blue_turn = !blue_turn
        }, 2000);
      }

      }
      cards = cards;
    }

  
   
      


       
     
</script>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />

      </div>
    {/each}
  </div>

  <div class = "box" id = "red-box">  {redPlayerScore}  </div>
<div class = "box" id = "blue-box">{bluePlayerScore}</div>
<div class = "box" id = "turn-box" style={blue_turn?"right: 10px;":"left:10px"}></div>

</main>
<div style="width:600px; height:800px; background-
color:bisque;"></div>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;

    
  }
  .box {
width: 100px;
height: 100px;
position: fixed;
text-align: center;
font-size: 30px;
}
#red-box, #blue-box{
bottom: 0px;
z-index: 2;
}

#red-box{
background-color: gold;
left:0px;

}
#blue-box{
background-color: pink;
right:0px;

}


#turn-box{
bottom: 10px;
z-index: 1;
background-color: purple;
box-shadow: 0 0 20px 20px purple;

}


</style>
