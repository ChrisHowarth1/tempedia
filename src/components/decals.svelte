<script>
    import Types from "./types.svelte";
    export let types;
</script>

<div class='card__decal--corner card__decal--left'>
  <!-- Render temtem types container -->
  <Types types={types}/>
</div>
<div class='card__decal--corner card__decal--left card__decal--shadow-left'></div>
<div class='card__decal--corner card__decal--right'></div>
<div class='card__decal--corner card__decal--right card__decal--shadow-right'></div>
<div class='card__decal--middle'></div>
<div class='card__decal--middle card__decal--shadow-middle'></div>

<style>
    /* @TODO update to clean up clip-path logic */
 .card__decal--corner { 
    z-index: 10;
    height: 130px;
    width: 100px;
    position: absolute;
    top: 0;
  }
  
  .card__decal--left {
    left: 0;
    background: linear-gradient(90deg, #242A2C 60%, #CFCFCF 40%); 
    
    clip-path: polygon(
      0% 5%,     /* top left */
      5% 0%,     /* top left */
      95% 0%,    /* top right */
      100% 5%,   /* top right */
      100% 40%,  /* bottom right */
      0% 100%,  /* bottom right */
      0% 100%,   /* bottom left */
      0 95%      /* bottom left */
    );
  }
    
  .card__decal--shadow-left { 
    z-index: 1;
    height: 135px;
    width: 102px;
    left: 1px;
    top: 1px;
    background: linear-gradient(90deg, #242A2C 59%, #CFCFCF 41%) !important;
    opacity: 50%;
  }

  .card__decal--right {
    background: linear-gradient(270deg, #242A2C 60%, #CFCFCF 40%); 
    right: 0;
    
    clip-path: polygon(
    0% 5%,     /* top left */
    5% 0%,     /* top left */
    95% 0%,    /* top right */
    100% 5%,   /* top right */
    100% 0%,  /* bottom right */
    100% 100%,  /* bottom right */
    0% 40%,   /* bottom left */
    0% 40%      /* bottom left */
    );
  }
  .card__decal--shadow-right { 
    z-index: 1;
    height: 135px;
    width: 102px;
    right: 1px;
    top: 1px;
    background: linear-gradient(270deg, #242A2C 59%, #CFCFCF 41%) !important; 
    opacity: 50%;
  }
    
  .card__decal--middle {
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    width: 140px;
    background: linear-gradient(360deg, #242A2C 60%, #CFCFCF 60%); 
    position: absolute;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    clip-path: polygon( 50% 0, 100% 100%, 0 100%);
  }

  .card__decal--shadow-middle { 
    z-index: 1 !important;
    height: 73px !important;
    width: 143px !important;
    background: linear-gradient(360deg, #242A2C 50%, #CFCFCF 50%); 
    opacity: 50%;
  }

</style>