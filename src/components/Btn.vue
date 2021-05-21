// buttonName "text inside button"
// buttonStatus [active, disabled]
// buttonIcon [list, star]
// buttonRoute "/Pageroute"
//buttonLarge "size in px"

<template>
  <div>
    <router-link class="btn btn-text" :class="buttonStatus" :to="buttonRoute" :style="'width:'+buttonLarge">
      <i :class="icon" class="margin-right"></i>
      {{ buttonName }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    buttonName: String,
    buttonIcon: String,
    buttonStatus: String,
    buttonRoute: String,
    buttonLarge: String,
  },
  computed: {
    icon() {
      if (this.buttonIcon === undefined || this.buttonIcon == null) {
        return "none";
      } else {
        return "fas fa-" + this.buttonIcon;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 11px 20px;
  border-radius: 60px;
}

.btn-text {
  text-decoration: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
}

.margin-right {
  margin-right: 10px;
}

.none {
  display: none;
}

.active {
  background: #f22539;
  cursor: pointer;
  &:active {
    background-color: #c00e20;
  }
}

.disabled {
  background-color: #bfbfbf;
  cursor: default;
}
</style>