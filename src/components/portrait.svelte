<script> 
    export let portraitSrc;
    // export let animatedSrc;
    // export let lumaPortraitSrc

    // function UrlExists(url) {
    //     var http = new XMLHttpRequest();
    //     http.open('HEAD', url, false);
    //     http.send();
    //     if (http.status != 404)
    //         return true;
    //     else
    //         return false;
    // }
</script>

<!-- @TODO update to have luma toggle logic and a fallback to the default static image -->

<!-- {#if (false)}
<img class='card__portrait' src="{portraitSrc}" alt="temicon">
{:else} -->
<img class='card__portrait' src="{portraitSrc}" alt="temicon">
<!-- {/if} -->

<!-- https://temtem-api.mael.tech/ 
      icon: "",
      lumaIcon: "",
      "renderStaticImage": "",
      "renderStaticLumaImage": "",
      "renderAnimatedImage": "",
      "renderAnimatedLumaImage": ""
  -->

<style>
    .card__portrait {
        display: flex;
        justify-content: center;
        max-height: 200px;
        width: max-content;
        align-self: center; 
    }
</style>