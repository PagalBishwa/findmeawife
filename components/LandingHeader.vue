<template>
  <div class="landing-header">
    <nav class="landing-header__nav">
      <div class="flex">
        <a href="/" aria-current="page" class="landing-header__nav-logo">
          <svg height="37" viewBox="0 0 16.82 16.62">
            <g id="Layer_2" data-name="Layer 2">
              <g>
                <path fill="#353648" d="M16.12,16.62a.5.5,0,0,1-.5-.5,7.22,7.22,0,1,0-14.43,0,.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5,8.22,8.22,0,1,1,16.43,0A.5.5,0,0,1,16.12,16.62Z" />
                <circle fill="#ecb45a" cx="10.69" cy="14.72" r="1.4" />
                <circle fill="#ecb45a" cx="6.13" cy="14.72" r="1.4" />
                <path fill="#353648" d="M4.14,9.64a.79.79,0,0,1-.49-.17L2.09,8.22A5.6,5.6,0,0,1,.07,3L.45.65A.76.76,0,0,1,1,0a.77.77,0,0,1,.79.19L3.65,2.16A5.52,5.52,0,0,1,5.2,6.81L4.91,9a.8.8,0,0,1-.49.62A.87.87,0,0,1,4.14,9.64Zm.14-1h0ZM1.36,1.25l-.3,1.88A4.57,4.57,0,0,0,2.72,7.44L4,8.44l.24-1.77A4.55,4.55,0,0,0,2.94,2.86Z" />
                <path fill="#353648" d="M12.68,9.64a.72.72,0,0,1-.29-.06A.77.77,0,0,1,11.91,9l-.29-2.16a5.52,5.52,0,0,1,1.55-4.65L15.05.23A.77.77,0,0,1,15.84,0a.76.76,0,0,1,.53.61L16.75,3a5.58,5.58,0,0,1-2,5.25L13.17,9.47A.81.81,0,0,1,12.68,9.64Zm.17-.56h0Zm2.61-7.83L13.88,2.86a4.55,4.55,0,0,0-1.27,3.81l.24,1.77,1.25-1a4.59,4.59,0,0,0,1.66-4.31Z" />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div class="flex">
        <a class="landing-header__nav-item">
          <span>Login</span>
        </a>
        <a class="landing-header__nav-item landing-header__nav-item--signup">
          <span>Sign up </span>
        </a>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {

  }
})
</script>
<style lang="scss" scoped>
.landing-header {
  padding: 0px;
  padding-top: 24px;
  z-index: 10;
  width: 100%;
  line-height: 21px;
  &__nav {
    --tw-shadow: 0 2.65546px 95px rgba(0,0,0,.1);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    @media screen and (min-width: 700px) {
      border-radius: 40px;
      padding-left: 24px;
      padding-right: 24px;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    @media screen and (min-width: 700px) and (max-width: 1200px) {
      width: 90%;
    }
    @media screen and (min-width: 1200px) {
      width: 1128px;
    }
  }
  &__nav-logo {
    line-height: unset;
    svg {
      display: block;
    }
  }
  &__nav-item {
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    align-items: center;
    display: flex;
    position: relative;
    font-weight: 600;
    margin-left: 4px;
    margin-right: 4px;
    cursor: pointer;
    &::before {
      content: "";
      display: inline-block;
      transform: scale(.7) perspective(1px);
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 40px;
      transition: all .2s ease;
      opacity: 0;
    }
    &:hover {
      &::before {
        transform: scale(1.035) perspective(1px);
        opacity: 1;
        background-color: rgba(0,0,0,.05);
      }
    }
    span {
      z-index: 1;
    }
    &--signup {
      padding: 8px 14px;
      &::before {
        opacity: 1;
        transform: unset;
        background-color: #ecb45a;
      }
      &:hover {
        &::before {
          background-color: #ecb45a;
        }
      }
    }
    @media screen and (min-width: 700px) {
      font-size: 16px;
      padding: 8px 16px;
      line-height: 24px;
    }
  }
}
</style>
