<script>
    export let gameDescription;
    export let wikiUrl;
</script>

<div class='card__overlay-container'>
    <div class='card__description'>
      {gameDescription}
    </div>
    <div class='card__overlay-wiki-url'>
        <a href={wikiUrl}>More information</a>
    </div>
</div> 

<style>
    .card__overlay-container {
        position: absolute;
        margin-top: -100px; 
        height: 100%;
        background-color: rgba(0,0,0,0.7); /* Black background with opacity */
        display: flex;
        align-items: center;
        padding: 20px;
        opacity: 0;
        flex-direction: column;
        justify-content: center;
    }

    .card__overlay-container:hover {
        transition: all .5s;
        display: flex;
        opacity: 100;
    }

    .card__description {
        filter: none;
        color: white;
        margin-bottom: 10px;
    }

    .card__overlay-wiki-url a {
        color: white;
    }
</style>