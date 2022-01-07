<template>
  <header class="header">
    <div class="header__navigation-wrap">
      <nuxt-link to="/" class="header__logo">
        findmalikawife
      </nuxt-link>
      <div class="header__menu">
        <nav class="header__nav-menu">
          <a href="" class="header__nav-item">Video</a>
          <a href="" class="header__nav-item">About Me</a>
          <a href="" class="header__nav-item">Who I'm Looking For</a>
          <a href="" class="header__nav-item">faqs</a>
        </nav>
      </div>
      <a href="" role="button" class="button">FIND ME A WIFE</a>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 86px;
  display: flex;
  padding: 30px 30px;
  align-items: center;
  background: transparent;
  &__logo {
    font-weight: 900;
    font-size: 32px;
  }
  &__navigation-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
  &__menu {
    display: flex;
  }
  &__nav-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
  }
  &__nav-item {
    padding-top: 9px;
    padding-bottom: 9px;
    opacity: 0.6;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-decoration: none;
    color: #222222;
    padding: 20px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
