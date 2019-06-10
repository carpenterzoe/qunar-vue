<template>
  <div class="container">
    
    <div class="ticket-item" v-for="item in list" :key="item.title">

      <div class="item-wrap border-bottom">
        <span class="icon"></span>
        <span class="desc">{{ item.title }}</span>
      </div>

      <div class="children-wrap" v-if="item.children">
        <detail-list :list="item.children"/>
      </div>

    </div>
  </div>
  
</template>

<script>
export default {
  name: 'DetailList',
  props: ['list'],
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
.icon{
  display: inline-block;
  vertical-align: middle;
  width: .4rem;
  height: .4rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0.05rem -0.45rem / .4rem no-repeat;
}
.desc{
  vertical-align: middle;
  font-size: .32rem;
}
.item-wrap{
  line-height: .8rem;
}
.children-wrap{
  padding: 0 .2rem;
}
.content{
  height: 20rem;
}
</style>
