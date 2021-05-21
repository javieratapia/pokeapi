<template>
    <div class="welcome">
        <img src="../../src/assets/welcome-pikachu.svg" alt="Pikachu Bienvenida">
        <h1>Welcome to Pokédex</h1>
        <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
        <btn buttonName="Get started" buttonStatus="active" buttonRoute="/home"/>
    </div>
</template>

<script>
import Btn from '../components/Btn.vue'
    export default {
  components: { Btn },
        name:"Welcome",
    }
</script>

<style lang="scss" scoped>
.welcome{

h1{
    font-weight: 700;
    font-size: 26px;
}
p{
    font-weight: 500;
    font-size: 18px;
}
}
</style>