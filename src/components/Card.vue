<template>
  <div class="card-base">
    <div class="card-title">{{ CardTitle }}</div>
    <btn-favorite buttonStatus="active" class="card-icon" />
  </div>
</template>

<script>
import BtnFavorite from "./BtnFavorite.vue";
export default {
  components: { BtnFavorite },
  props: {
    CardTitle: String,
  },
};
</script>

<style lang="scss" scoped>
.card-base {
  display: inline-grid;
  grid-template-columns: 90% 10%;

  width: 570px;
  height: 60px;
  background-color: #ffffff;
}
.card-title {
  grid-column: 1;
  align-self: center;
  justify-self: start;
  padding-left: 20px;

  font-weight: 500;
  font-size: 22px;
}

.card-icon {
  grid-column: 2;
  align-self: center;
  justify-self: center;
}
</style>