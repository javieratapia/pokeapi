<template>
  <div id="app">
    <router-view/>
    <menu-bottom/>
  </div>
</template>

<script>
import MenuBottom from "../src/components/MenuBottom.vue";
export default {
  components:{MenuBottom}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@500&display=swap');

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body{
  margin: 0;
  padding: 0;
  background: #F9F9F9;
}
</style>
