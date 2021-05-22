<template>
  <div>
    <input-search />
    <div v-for="(item, index) in favoriteListRender" :key="index">
      <card :CardTitle="item" />
    </div>

    <menu-bottom buttonStatusAll="active" buttonStatusFav="disabled" />

    <modal />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import InputSearch from "../components/InputSearch.vue";
import MenuBottom from "../components/MenuBottom.vue";
import Modal from "../components/Modal.vue";

import { mapGetters, mapState } from "vuex";

export default {
  components: { InputSearch, Card, MenuBottom, Modal },
  name: "Favorites",
  computed: {
    ...mapState(["favoriteList"]),
    ...mapGetters(["favoriteListRender"]),
  },
};
</script>

<style lang="scss" scoped>
</style>