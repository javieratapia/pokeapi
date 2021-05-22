<template>
  <div class="menu-bottom-base">
    <div class="menu-bottom-container">
      <btn
        buttonName="All"
        buttonIcon="list"
        :buttonStatus="buttonStatusAll"
        buttonRoute="/home"
        buttonLarge="75%"
      />
      <btn
        buttonName="Favorites"
        buttonIcon="star"
        :buttonStatus="buttonStatusFav"
        buttonRoute="/favorites"
        buttonLarge="75%"
      />
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
export default {
  components: {
    Btn,
  },
  props: {
    buttonStatusAll: String,
    buttonStatusFav: String,
  },
};
</script>

<style lang="scss" scoped>
.menu-bottom-base {
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);

  position: fixed;
  z-index: 1;
  bottom: 0;
}

.menu-bottom-container {
  max-width: 570px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}
</style>