<template>
  <div>
    <div class="input-wrapper">
      <input v-model="keyword" 
      class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    
    <div class="search-result" v-show="keyword" ref="wrapper">
      <ul >
        <li @click="changeCity" class="search-item border-bottom" 
        v-for="item in list" :key="item.index">{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="!this.list.length">没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex';
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: []
    }
  },
  methods: {
    changeCity(e){
      let cityName = e.target.innerText
      //this.$store.commit('changeCity', cityName)
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])    // 将 this.changeCity() 映射为 this.$store.commit('changeCity')
  },
  watch: {
    'keyword': function(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      let result = []

      //节流函数
      this.timer = setTimeout(()=>{
        for(var i in this.cities){
          this.cities[i].forEach( item => {
            if (item.spell.indexOf(this.keyword) != -1 || item.name.indexOf(this.keyword) != -1){
              result.push(item)
            }
          })
        }
      this.list = result
      },100)
    }
  },
  components: {

  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper)
  } 
}
</script>

<style scoped lang="scss">

.input-wrapper{
   background-color: $bgColor;
  padding: 0 .1rem;
  height: .72rem;
  
}
.search-input{
  width: 7.3rem;
  height: .62rem;
  line-height: .62rem;
  border-radius: .05rem;
  text-align: center; 
  background-color: #fff;
  color: #666;
}
.search-result{
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  z-index: 1;
  .search-item{
    padding-left: .2rem;
    background-color: #fff;
    color: #666;
    line-height: .62rem;
  }
}
</style>
