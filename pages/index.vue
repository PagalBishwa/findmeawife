<template>
  <div class="landing-page">
    <div class="xs:px-24">
      <div class="landing-page__hero">
        <h1 class="landing-page__hero-text">
          A supporter is worth a thousand followers.
        </h1>
        <p>
          Accept donations. Start a membership. Sell anything you like. It’s easier than you think.
        </p>
      </div>
      <div class="landing-page__start">
        <span class="landing-page__start-text">findmeawife.xzy/</span>
        <input type="text" class="landing-page__start-input" placeholder="yourname">
        <a href="" class="landing-page__action-button landing-page__action-button--start">
          <span>Start my page</span>
        </a>
      </div>
      <a href="" class="landing-page__action-button landing-page__action-button--hide-desktop">
        <span>Start my page</span>
      </a>
      <div class="landing-page__action-text">
        It’s free, and takes less than a minute.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'landingPage'
})
</script>
<style lang="scss" scoped>
.landing-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__hero {
    text-align: center;
    margin-bottom: 24px;
    p {
      margin-top: 16px;
      font-size: 16px;
      line-height: 30px;
    }
    @media screen and (min-width: 700px){
      max-width: 800px;
    }
  }
  &__hero-text {
    font-size: 28px;
    line-height: 44px;
    @media screen and (min-width: 700px){
      max-width: 800px;
      line-height: 80px;
      font-size: 64px;
    }
  }
  &__action-text {
    margin-top: 16px;
    line-height: 24px;
    text-align: center;
  }
  &__start {
    width: 100%;
    border: 2px solid rgba(34,34,34,.05);
    border-radius: 40px;
    align-items: center;
    height: 56px;
    padding-left: 24px;
    padding-right: 12px;
    background: #ffffff;
    display: flex;
    margin: 0 auto;
    @media screen and (min-width: 700px){
      height: 74px;
      max-width: 600px;
    }
  }
  &__start-text {
    font-weight: 600;
  }
  &__start-input {
    border: none;
    outline: 0;
    background: transparent;
    padding: 0;
    font-family: inherit;
    font-size: 18px;
    display: block;
    margin: 0;
    width: 100%;
    @media screen and (min-width: 700px){
      margin-right: 10px;
    }
  }
  &__start-text, &__start-input {
    font-size: 18px;
    @media screen and (min-width: 700px){
      font-size: 22px;
    }
  }

  &__action-button {
    height: 48px;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    transition: all .2s ease;
    border-radius: 40px;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 40px;
      transition: all .2s ease;
      background: #ecb45a;
    }
    span {
      z-index: 1;
      font-weight: 700;
    }
    &--hide-desktop {
      @media screen and (min-width: 700px){
        display: none;
      }
    }
    &--start {
      margin-top: 0px;
      height: 56px;
      font-size: 18px;
      padding-left: 24px;
      padding-right: 24px;
      @media screen and (max-width: 700px){
        display: none;
      }
    }
  }
}
</style>
