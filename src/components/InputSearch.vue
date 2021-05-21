<template>
  <div>
    <i class="fas fa-search"></i>
    <input class="input" type="text" placeholder="Search" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  width: 570px;
  height: 50px;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}
input::placeholder {
  color: #bfbfbf;
}
</style>