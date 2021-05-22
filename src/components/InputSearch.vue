<template>
  <div class="input-base">
    <i class="fas fa-search"></i>
    <input
      class="input"
      type="text"
      placeholder="Search"
      v-model="searchData"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      searchData: "",
    };
  },
  computed: {
    ...mapState(["valueFilter"]),
  },
  methods: {
    ...mapMutations(["updateValueFilter"]),
  },
  watch: {
    searchData() {
      this.updateValueFilter(this.searchData.toLowerCase());
    },
    valueFilter() {
      if (this.valueFilter == "") {
        this.searchData = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input-base {
  display: grid;
  grid-template-columns: 35px 1fr;
  max-width: 570px;
  width: 95%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  background-color: #ffffff;

  .fa-search {
    color: #bfbfbf;
    font-size: 18px;
    justify-self: center;
  }
  .input {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    width: 98%;
    height: auto;
    border: none;
    color: #353535;

    &:focus {
      outline: none;
    }
  }
  input::placeholder {
    color: #bfbfbf;
  }
}
</style>