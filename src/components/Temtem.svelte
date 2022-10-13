<script>
    import { onMount } from 'svelte';
    import { apiData, typeData } from '../data/store';
    import Card from './card.svelte';

    onMount(async () => {
        //fetch api data
        fetch(`https://temtem-api.mael.tech/api/temtems`)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            apiData.set(data);
        }).catch(error => {
            console.log(error);
            return [];
        });
        //fetch data for types from the api
        fetch(`https://temtem-api.mael.tech/api/types`)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            typeData.set(data);
        }).catch(error => {
            console.log(error);
            return [];
        });
    });

</script>
    <div class='temopedia__container'>
        <div class='temopedia__grid'>
            {#each $apiData as tem}
                <Card tem={tem}/>
            {/each}
        </div>
    </div>

<style>
    .temopedia__container {
        padding-top: 8px;
        width: 100%;
    }

    .temopedia__grid {
        display: flex;
        width: 100%;
        flex-flow: wrap;
        justify-content: space-around;
    }
</style>