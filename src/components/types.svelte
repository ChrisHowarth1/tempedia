<script>
  export let types;
</script>

<div class='card__types-container'>
  <div class='card__type'>
    {#each types as type}
      <div class='card__type-icon-wrapper'>
      <img class='card__type-icon' title='{type}' alt="{type}" src="https://temtem-api.mael.tech/images/icons/types/{type}.png">

      </div>
    {/each}
  </div>
</div>

<style>
  .card__type {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 10px;
  }

  .card__type-icon-wrapper img {
    width: 40px;
    height: 40px;
  }
</style>