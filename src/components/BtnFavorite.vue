//buttonStatus [active,disabled]

<template>
    <div class="circle" :class="buttonStatus">
        <i class="fas fa-star"></i>
    </div>
</template>

<script>
    export default {
        props:{
            buttonStatus: String
        }
        
    }
</script>

<style lang="scss" scoped>
.circle{
  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;
  border-radius: 50px;
  background-color: #F5F5F5;
}
.fa-star{
    font-size: 26px;
}

.active{
    color: #ECA539;
}

.disabled{
    color: #BFBFBF;
}
</style>