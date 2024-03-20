<!-- For each searchable category, create navigatable button -->
<div class="chat">
  <h1>Press any of the following categories to display their items</h1>
  <hr />
  <ul>
    {#each [["Users", "/users"]] as searchable}
      <li><a href={"/search" + searchable[1]}>{searchable[0]}</a></li>
    {/each}
  </ul>
</div>
