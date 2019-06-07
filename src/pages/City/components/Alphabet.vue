<template>
  <div class="alphabet-container">
    <ul>
      <li v-for="(value, name, index) in cities" 
      :key="index" @click="cityFilter">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cities'],
  data() {
    return {

    }
  },
  methods: {
    cityFilter(e){
      this.$emit('cityFilter', e.target.innerText)
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
