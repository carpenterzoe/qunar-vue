<template>
  <div class="container">
    <div class="header-wrapper">
      <i class="iconfont icon-zuojiantou"></i>
      <input type="text" class="header-input iconfont" 
      :placeholder="'\ue62d 输入城市/景点/游玩主题'"/>
      <router-link to="/city" class="city">深圳<i class="iconfont icon-sanjiaodown"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
  .header-wrapper{
    display: flex;
    justify-content: space-between;
    line-height: $headerHeight;
    .icon-zuojiantou{
      font-size: .40rem;
      font-weight: bold;
    }
    .icon-zuojiantou, .city{
      display: inline-block;
      width: .7rem;
      height: $headerHeight;
      text-align: center;
      color: #fff;
    }
    .city{
      width: 1.2rem;
      vertical-align: middle;
      margin-left: 0.15rem;
      .icon-sanjiaodown{
        font-size: .28rem;
        margin-left: 0.15em;
      }
    }
    .header-input{
      flex: 1;
      margin: .12rem 0;
      border-radius: 5px;
      color: #ccc;
      padding-left:.2rem;
      padding-top: 0.05rem;
      box-sizing: border-box;
      &::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #ccc;
        font-size: .28rem;
      }
    }
  }
}
</style>
