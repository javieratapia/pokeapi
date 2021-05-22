//buttonStatus [active,disabled]

<template>
  <div class="circle" :class="buttonState" @click="addFavorite(buttonData)">
    <i class="fas fa-star"></i>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    buttonData: String,
  },
  methods: {
    ...mapActions(["addFavorite"]),
  },
  computed: {
    ...mapState(["favoriteList"]),

    buttonState() {
      if (this.favoriteList.indexOf(this.buttonData) != -1) {
        return "active";
      } else {
        return "disabled";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.circle {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  border-radius: 50px;
  background-color: #f5f5f5;
  cursor: pointer;
}
.fa-star {
  font-size: 26px;
}

.active {
  color: #eca539;
}

.disabled {
  color: #bfbfbf;
}
</style>