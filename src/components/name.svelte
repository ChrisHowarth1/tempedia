<script>
  export let name;
  export let number;

  name = name.toUpperCase()
</script>
<div class='card__header'>  
    <!-- Render temtem name -->
    <div class='card__name'>
      {name} 
    </div>
    
    <!-- Render temtem number -->
    <div class='card__number'>
      #{number} 
    </div>
  </div>
<style>
  .card__name {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 26px;
    font-family: 'Trebuchet MS', sans-serif;
    padding-top: 5px;
  }

  .card__number {
    display: flex;
    justify-content: center;
    font-size: 26px;
  }
</style>