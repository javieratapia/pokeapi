<template>
  <div class="home">
    <input-search class="home-margin-top" />
    <div class="home-margin-top">
      <card CardTitle="Pokemon" />
    </div>
    <modal />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import InputSearch from "../components/InputSearch.vue";
import Modal from '../components/Modal.vue';

export default {
  components: { InputSearch, Card, Modal },
  name: "Home",
    
};
</script>

<style lang="scss" scoped>
.home-margin-top {
  margin-top: 35px;
}
</style>
