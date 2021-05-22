<template>
  <div class="modal-container" v-if="showModal">
    <div class="modal-base">
      <div class="modal-backgroud">
        <div @click="modalAction(false)">
          <i class="fas fa-times-circle"></i>
        </div>
        <img :src="dataDetails.image" alt="Pokemon" class="imagen-details" />
      </div>
      <ul class="modal-list">
        <li class="modal-data">
          <h3 class="list-title">Name:</h3>
          <p>{{ dataDetails.name | capitalize }}</p>
        </li>
        <li class="modal-data">
          <h3 class="list-title">Weight:</h3>
          <p>{{ dataDetails.weight }}</p>
        </li>
        <li class="modal-data">
          <h3 class="list-title">Height:</h3>
          <p>{{ dataDetails.height }}</p>
        </li>
        <li class="modal-data">
          <h3 class="list-title">Types:</h3>
          <p v-for="(item, index) in dataDetails.types" :key="index">
            {{ item.type.name | capitalize }}
          </p>
        </li>
      </ul>
      <div class="modal-button">
        <btn
          class="modal-btn"
          buttonName="Share to my friends"
          buttonStatus="active"
          buttonRoute="/home"
          v-clipboard:copy="clipboard"
        />
        <btn-favorite
          class="modal-btn-favorite"
          :buttonData="dataDetails.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
import BtnFavorite from "./BtnFavorite.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "Modal",
  components: { Btn, BtnFavorite },
  computed: {
    ...mapState(["showModal", "dataDetails"]),

    clipboard(){
      return `Name: ${this.dataDetails.name}, Weight: ${this.dataDetails.weight}, Height: ${this.dataDetails.height}, Types: ${this.dataDetails.types[0].type.name}, ${this.dataDetails.types[1].type.name}`
    }
  },
  methods: {
    ...mapActions(["modalAction"]),
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  color: #5E5E5E;
;
}
.modal-base {
  max-width: 570px;
  width: 95%;
  margin: auto;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
}
.modal-backgroud {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;

  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  .fa-times-circle {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #ffffff;
    cursor: pointer;
  }
}

.imagen-details {
  width: 150px;
}
.modal-list {
  list-style: none;
  text-align: start;
  width: 90%;
  margin: 10px auto;
  padding: 0;
}
.modal-data {
  display: inline-block;
  height: auto;
  border-bottom: 1px solid #e8e8e8;
  width: 100%;
  &:last-child {
    border-bottom: 1px solid transparent;
  }
  .list-title {
    display: inline-block;
    font-weight: 700;
    font-size: 18px;
  }
  p {
    display: inline-block;
    font-size: 18px;
    margin: auto 4px;
  }
}
.modal-button {
  display: inline-grid;
  grid-template-columns: 90% 10%;
  width: 90%;
  margin: 20px 0;
  .modal-btn {
    grid-column: 1;
    align-self: center;
    justify-self: start;
  }
  .modal-btn-favorite {
    grid-column: 2;
    align-self: center;
    justify-self: center;
  }
}
</style>