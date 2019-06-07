<template>
  <div class="container">
    <div class="header-wrapper">
      <i class="iconfont icon-zuojiantou"></i>
      <input type="text" class="header-input iconfont" 
      :placeholder="'\ue62d 输入城市/景点/游玩主题'"/>
      <router-link to="/city" class="city">{{ this.city }}
      <i class="iconfont icon-sanjiaodown"></i></router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  components: {
  },
  computed: {
    ...mapState(['city'])
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
      font-size: .4rem;
      font-weight: bold;
      width: .7rem;
    }
    .icon-zuojiantou, .city{
      display: inline-block;
      height: $headerHeight;
      text-align: center;
      color: #fff;
    }
    .city{
      min-width: 1rem;
      padding: 0 .1rem;
      text-align: center;
      .icon-sanjiaodown{
        font-size: .28rem;
        margin-left: -0.15em;
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
