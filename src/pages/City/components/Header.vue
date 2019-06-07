<template>
  <div class="container">
    <router-link to="/" tag="span" class="back">
      <i class="iconfont icon-zuojiantou"></i>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  height: $headerHeight;
  background-color: $bgColor;
  text-align: center;
  line-height: $headerHeight;
  color: white;
  .back{
    position: absolute;
    top: 0;
    left: 0;
  }
  .icon-zuojiantou{
    font-size: .40rem;
    font-weight: bold;
    display: inline-block;
    width: .7rem;
    height: $headerHeight;
    text-align: center;
  }
}
</style>
