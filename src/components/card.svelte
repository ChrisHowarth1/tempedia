<script>
  import Portrait from "./portrait.svelte";
  import Decals from "./decals.svelte";
  import Name from "./name.svelte";
  import Overlay from "./overlay.svelte";
  // import Weaknesses from "./weaknesses.svelte";
  export let tem;
  // export let typeData;

  //add preceeding 0s as formatting to tem number
  if (tem.number.toString().length < 3) {
    while (tem.number.toString().length < 3) {
      tem.number = '0' + tem.number
    }
  }
</script>

<!-- Render temtem card -->
<div class='card__container'> 
  <Decals types={tem.types}/>
  
  <div class='card'> 
    <Overlay gameDescription={tem.gameDescription} wikiUrl={tem.wikiUrl} />
    <!-- Render temtem portrait icon -->
    <!-- <Portrait 
      animatedSrc={tem.wikiRenderAnimatedUrl} 
      lumaPortraitSrc={tem.lumaWikiPortraitUrlLarge}
      animatedLumaSrc={tem.wikiRenderAnimatedLumaUrl}
      /> -->
      <Portrait 
      portraitSrc={tem.wikiRenderStaticUrl}
    />
    
    <div class = 'card__temtem-wrapper'>
      <!-- Renter temtem name and number information -->
      <Name name={tem.name} number={tem.number}/>

    </div>
  </div>
</div>
  
<style>
  .card__container {
    width: 90%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 10px 20px 10px;
    padding: 5px;
    max-width: 350px;

  }

  @media only screen and (min-width: 768px) {
    .card__container {
      width: 50%;
    }
  }
  
  .card {
    padding: 100px 0 100px;
    overflow: hidden;
    background-color: #66FFE9;
    display: flex;
    flex-direction: column;

    --notchSize: 20px;
    clip-path: polygon(
      0% var(--notchSize), 
      var(--notchSize) 0%, 
      calc(100% - var(--notchSize)) 0%, 
      100% var(--notchSize), 
      100% calc(100% - var(--notchSize)), 
      calc(100% - var(--notchSize)) 100%, 
      var(--notchSize) 100%, 
      0% calc(100% - var(--notchSize))
    );
  }
</style>