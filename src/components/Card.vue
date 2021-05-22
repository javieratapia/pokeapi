<template>
  <div class="card-base">
    <div
      class="card-title"
      @click="
        loadDetails(CardTitle);
        modalAction(true);
      "
    >
      {{ CardTitle | capitalize }}
    </div>

    <btn-favorite class="card-icon" :buttonData="CardTitle" />
  </div>
</template>

<script>
import BtnFavorite from "./BtnFavorite.vue";

import { mapActions } from "vuex";

export default {
  components: { BtnFavorite },
  props: {
    CardTitle: String,
  },
  methods: {
    ...mapActions(["loadDetails", "modalAction"]),
  },
};
</script>

<style lang="scss" scoped>
.card-base {
  display: inline-grid;
  grid-template-columns: 1fr 60px;
  max-width: 570px;
  width: 95%;
  height: 60px;
  background-color: #ffffff;
  margin-top: 10px;
  color: #353535;
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