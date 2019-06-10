<template>
  <div class="alphabet-container">
    <ul>
      <li v-for="item in letters" :key="item" @click="cityFilter"
      @touchstart="touchStart" @touchmove="touchMove"
      @touchend="touchEnd" :ref="item"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cities'],
  data() {
    return {
      touchStatus: false,
      timer: null,
      startY: 0
    }
  },
  computed: {
    letters(){
      let letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    cityFilter(e){
      this.$emit('cityFilter', e.target.innerText)
    },
    touchStart(){
      this.touchStatus = true
    },
    touchMove(e){
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer = setTimeout( () => {
          const touchY = e.touches[0].clientY - 158
          const index = Math.floor((touchY - this.startY) / 20)

          if(index >= 0 && index < this.letters.length){
            this.$emit('cityFilter', this.letters[index])
          }
        }, 20)
      }
    },
    touchEnd(){
      this.touchStatus = false
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.alphabet-container{
  width: .1rem;
  position: absolute;
  right: .3rem;
  top: 3rem;
  ul>li{
    width: .4rem;
    line-height: .4rem;
    color: #00bcd4;
    text-align: center;
  }
}
</style>
