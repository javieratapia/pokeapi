<template>
  <div class="welcome-container">
    <div class="welcome">
      <img
        src="../../src/assets/welcome-pikachu.svg"
        alt="Pikachu Bienvenida"
      />
      <h1>Welcome to Pokédex</h1>
      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <btn buttonName="Get started" buttonStatus="active" buttonRoute="/home" />
    </div>
  </div>
</template>

<script>
import Btn from "../components/Btn.vue";
export default {
  components: { Btn },
  name: "Welcome",
};
</script>

<style lang="scss" scoped>
.welcome-container {
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.welcome {
  margin: auto;
  width: 95%;
  max-width: 570px;

  h1 {
    font-weight: 700;
    font-size: 26px;
    color: #353535;
    margin-top: 7vh;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: #5e5e5e;
    margin: 4vh auto 6vh;
  }

  img {
    width: 327px;
    height: auto;
    margin: auto;
  }
}
</style>