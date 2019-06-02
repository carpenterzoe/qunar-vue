<template>
  <div class="alphabet-container">
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>C</li>
      <li>C</li>
      <li>C</li>
      <li>C</li>
      <li>C</li>
    </ul>
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
