<template>
  <div>
    <div class="loading-background" v-if="loading">
      <img class="loader" src="../assets/loader.svg" alt="Pokebola" />
    </div>
    <div v-else>
      <input-search class="home-margin-top" />
      <div v-if="dataName.length >0">
        <div v-for="(item, index) in dataName" :key="index">
          <card :CardTitle="item" />
        </div>
      </div>
      <div v-else class="home-margin-top">
        <h1>Uh-oh!</h1>
        <p>You look lost on your journey!</p>
        <div @click="updateValueFilterLocal">

        <btn buttonName="Go back home" buttonRoute="/home" buttonStatus="active" class="home-margin-top"/>
        </div>
      </div>
      <modal />
    </div>
    <menu-bottom buttonStatusAll="disabled" buttonStatusFav="active" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import InputSearch from "../components/InputSearch.vue";
import Modal from "../components/Modal.vue";
import MenuBottom from "../components/MenuBottom.vue";
import Btn from '../components/Btn.vue';

import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: { InputSearch, Card, MenuBottom, Modal, Btn },
  name: "Home",
  created() {
    this.loadData();
  },
  computed: {
    ...mapState(["loading", "showModal"]),
    ...mapGetters(["dataName"]),
  },
  methods: {
    ...mapActions(["loadData"]),
    ...mapMutations(["updateValueFilter"]),
    updateValueFilterLocal(){
      this.updateValueFilter('');
    }
  },
};
</script>

<style lang="scss" scoped>
.home-margin-top {
  margin-top: 35px;
}

@keyframes pokerotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading-background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #f9f9f9;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
  animation: pokerotation 0.8s;
  animation-iteration-count: infinite;
}
</style>
