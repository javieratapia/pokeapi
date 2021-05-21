<template>
  <div class="menu-bottom-base">
    <btn
      buttonName="All"
      buttonIcon="list"
      buttonStatus="active"
      buttonRoute="/home"
      buttonLarge="260px"

      
    />
    <btn
      buttonName="Favorites"
      buttonIcon="star"
      buttonStatus="active"
      buttonRoute="/favorites"
      buttonLarge="260px"
        class="menu-bottom-margin"
      
    />
  </div>
</template>

<script>
import Btn from "./Btn.vue";
export default {
  components: {
    Btn,
  },
};
</script>

<style lang="scss" scoped>
.menu-bottom-base{
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFFFFF;
    box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);

    position: fixed;
    bottom: 0; 
}

.menu-bottom-margin{
    margin-left: 20px;
}
</style>