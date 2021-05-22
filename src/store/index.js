import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    data: [],
    dataDetails: [],
    favoriteList: [],
    showModal: false,
    dataNames: [],
    valueFilter: "",
  },
  mutations: {
    loadingState(state, loading) {
      state.loading = loading;
    },
    updateDataDetails(state, data) {
      state.dataDetails = data;
    },
    modalAction(state, option) {
      state.showModal = option;
    },
    addFavorite(state, name) {
      let index = state.favoriteList.indexOf(name);
      if (index === -1) {
        state.favoriteList.push(name);
      } else {
        state.favoriteList.splice(index, 1);
      }
    },
    updateDataNames(state, val) {
      state.dataNames = val;
    },
    updateValueFilter(state, val) {
      state.valueFilter = val;
    },
  },
  getters: {
    dataName(state) {
      let nameList = state.dataNames.filter((element) => {
        return element.includes(state.valueFilter);
      });
      return nameList;
    },
    favoriteListRender(state) {
      let nameList = state.favoriteList.filter((poke) => {
        return poke.includes(state.valueFilter);
      });
      return nameList;
    },
  },
  actions: {
    loadData({ commit }) {
      commit("loadingState", true);
      let nameList = [];
      setTimeout(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
          response.data.results.forEach((element) => {
            nameList.push(element.name);
          });
          commit("updateDataNames", nameList);
          commit("loadingState", false);
        });
      }, 1000);
    },
    loadDetails({ commit }, name) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
          let dataList = {};
          let type = []
          response.data.types.forEach(element => {
            type.push(element.type.name)
          });
          dataList = {
            name: response.data.name,
            weight: response.data.weight,
            height: response.data.height,
            types: type,
            image: response.data.sprites.other.dream_world.front_default,
          };
          commit("updateDataDetails", dataList);
        });
    },
    modalAction({ commit }, option) {
      commit("modalAction", option);
    },
    addFavorite({ commit }, name) {
      commit("addFavorite", name);
    },
  },
});
