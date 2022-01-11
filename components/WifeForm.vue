<template>
  <div class="form">
    <div class="form__header">
      <div class="form__header-stripe" />
      <div class="form__heading">
        Find Malik A Wife!
      </div>
      <p>{{ description }}</p>
    </div>
    <form>
      <div class="form__field-wrapper">
        <label for="" class="form__field-label">Name</label>
        <input type="text" class="form__field" placeholder="Your Answer">
      </div>
      <div class="form__field-wrapper">
        <label for="" class="form__field-label">Email</label>
        <input type="email" class="form__field" placeholder="Your Answer">
      </div>
      <div class="form__field-wrapper">
        <label for="" class="form__field-label">{{ moreAbout }}</label>
        <textarea class="form__field form__field--textarea" placeholder="Your Answer" rows="1" />
      </div>
      <div class="flex flex-space-between">
        <div class="button button--form" role="button">
          Submit
        </div>
        <div class="form__reset">
          Clear form
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    description: {
      type: String,
      default: "Think you're the one for me? Apply here and tell me a bit about yourself."
    },
    moreAbout: {
      type: String,
      default: 'Tell me a bit about yourself (like your age, job, are you practising etc.)'
    }
  }
})
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  width: 100%;
  max-width: 360px;
  flex-direction: column;
  position: relative;
  text-align: left;
  p {
    line-height: 1.3;
  }
  &__header {
    position: relative;
    background: white;
    margin-top: 12px;
    background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 22px 24px 24px;
    position: relative;
  }
  &__header-stripe {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 10px;
    left: -1px;
    position: absolute;
    top: -1px;
    width: calc(100% + 2px);
    background-color: rgb(219, 68, 55);
  }
  &__heading {
    font-size: 32px;
    font-weight: 400;
    color: #202124;
    line-height: 135%;
    max-width: 100%;
    min-width: 0%;
    word-wrap: break-word;
    margin-bottom: 15px;
  }
  &__field-wrapper {
    background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 24px;
    page-break-inside: avoid;
    word-wrap: break-word;
  }
  &__field-label, &__field {
    font-size: 16px;
    letter-spacing: .1px;
    line-height: 24px;
    color: #202124;
    font-weight: 400;
    width: 100%;
    word-break: break-word;
  }
  &__field-label {
    display: block;
    margin-bottom: 16px;
  }
  &__field {
    display: block;
    padding: 0px;
    outline: none;
    flex: 1;
    flex-basis: 0;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    font-family: inherit;
    will-change: border-bottom-color;
    transition: border-bottom-color .3s cubic-bezier(0.4,0,0.2,1);
    &:active, &:focus {
      border-bottom-color: rgb(217, 61, 46);
    }
    &--textarea {
      height: 25px;
      resize: none;
    }
  }
  &__reset {
    cursor: pointer;
    font-weight: 600;
    line-height: 1;
    color: rgb(217, 61, 46);
  }
}
</style>
