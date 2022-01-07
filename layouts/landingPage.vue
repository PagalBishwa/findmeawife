<template>
  <div class="layout__root">
    <Header />
    <div class="base-page">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.layout__root {
  height: 100vh;
  width: 100%;
  .base-page {
    height: calc(100vh - 97px);
    // padding-top: 100px;
    @media screen and (max-width: 700px){
      // padding-top: 30px;
    }
  }
}
</style>
