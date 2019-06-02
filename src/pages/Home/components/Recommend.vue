<template>
  <div class="container">
    <p class="main-title">热销推荐</p>
    <div class="hot-list border-bottom" v-for="item in recommendList" :key="item.id">
      <img :src="item.imgUrl" alt="">
      <div class="hot-desc">
        <p class="title">{{ item.title }}</p>
        <p class="desc">{{ item.desc }}</p>
        <button>查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recommendList'],
  data() {
    return {
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.main-title{
  width: 100%;
  height: .6rem;
  line-height: .6rem;
  background-color: #eee;
  padding: .1rem 0 0 .2rem;
}
.hot-list{
  display: flex;
  img{
    flex: 0 0 1.9rem;
    width: 1.9rem;
    height: 1.9rem;
    padding: .1rem;
    box-sizing: border-box;
  }
  .hot-desc{
    flex: 1;
    padding: .1rem;
    box-sizing: border-box;
    .title{
      font-size: .32rem;
      height: .54rem;
      line-height: .54rem;
    }
    .desc{
      font-size: .28rem;
      color: #ccc;
      height: .4rem;
      width: 5.4rem;
      line-height: .4rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    button{
      background-color: #ff9300;
      border-radius: .08rem;
      width: 1.55rem;
      color: white;
      margin-top: .16rem;
    }
  }
}

</style>
