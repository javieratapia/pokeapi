<template>
  <div class="modal-base">
      <div>
          <i class="fas fa-times-circle"></i>
      </div>
    <div class="modal-backgroud">
      <img
        src="../assets/welcome-pikachu.svg"
        alt="Pokemon"
        class="imagen-size"
      />
    </div>
    <div class="modal-list">
      <span class="list-title"> Name: </span> {{ AttributeName }}
      <div class="line"></div>
      <span class="list-title"> Weight: </span> {{ AttributeWeight }}
      <div class="line"></div>
      <span class="list-title"> Height: </span> {{ AttributeHeight }}
      <div class="line"></div>
      <span class="list-title"> Types: </span>{{ AttributeTypes }}
    </div>
    <div class="modal-button">
      <btn
        class="modal-btn"
        buttonName="Share to my friends"
        buttonStatus="active"
        buttonRoute="/home"
      />
      <btn-favorite class="modal-btn-favorite" buttonStatus="active" />
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
import BtnFavorite from "./BtnFavorite.vue";

export default {
  components: { Btn, BtnFavorite },
  props: {
    AttributeName: String,
    AttributeWeight: String,
    AttributeHeight: String,
    AttributeTypes: Array,
  },
};
</script>

<style lang="scss" scoped>
.modal-base {
  display: inline-block;
  width: 40%;
  z-index: 1;
}
.modal-backgroud {
  height: 220px;

  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
.imagen-size {
  width: 180px;
}
.modal-list {
  display: inline-block;
  text-align: start;
  width: 90%;
  margin: 10px 0;
}
.list-title {
  font-weight: 700;
}
.line {
  height: 1px;
  background-color: #e8e8e8;
  margin: 10px 0;
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