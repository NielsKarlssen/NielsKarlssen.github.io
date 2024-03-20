<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
    <article>
    {#each Object.entries(item) as [key,value]}
    {#if typeof value=="object"}
    {#each Object.entries(value) as [key1,value1]}
    {/each}
    {:else}
    <p class= {key}>{key}: {value}</p>
    {/if}
    {/each}
    </article>
    {/each}

  </div>
</main>
<style>
  .brand{
    background-color: aquamarine;
  }
  .style{
    background-color: red;
  }
  .alcohol{
    background-image: url('/giphy.gif');
    background-position: center;
    background-size: cover;

  }
</style>
