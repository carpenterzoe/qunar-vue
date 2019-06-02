<template>
  <div class="container">
    
    <div class="my-city">
      <p class="city-title border-bottom">当前城市</p>
      <div class="button-wrap border-bottom">
        <span class="active-city"> 深圳</span>
      </div>
    </div>

    <div class="hot-cities">
      <p class="city-title border-bottom">热门城市</p>
      <div class="button-wrap border-bottom">
        <span>深圳</span>
        <span>深圳</span>
        <span>深圳</span>
        <span>深圳</span>
        <span>深圳</span>
        <span>深圳</span>
      </div>
    </div>
    
    <div class="all-cities">
      <p class="city-title border-bottom">A</p>
      <ul>
        <li class="city-list border-bottom">深圳</li>
        <li class="city-list border-bottom">深圳</li>
        <li class="city-list border-bottom">深圳</li>
        <li class="city-list border-bottom">深圳</li>
      </ul>
    </div>
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
  color: #666;
}
.city-title{
  line-height: .54rem;
  padding-left: .2rem;
  background-color: #eee;
}
.button-wrap{
  padding: .1rem .6rem .1rem .1rem;
  box-sizing: border-box;
  span{
    display: inline-block;
    border-radius: .06rem;
    width: 1.95rem;
    line-height: .5rem;
    border: .02rem solid #ccc;
    text-align: center;
    margin: .1rem;
  }
}
.city-list{
  padding: .2rem;
  line-height: .37rem;
}
.button-wrap .active-city{
  border: .02rem solid #00bcd4;
  color: #00bcd4;
}
</style>
