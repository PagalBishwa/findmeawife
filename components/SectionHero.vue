<template>
  <section class="section section--hero" data-editable="true" :style="computedStyle">
    <div class="section__content">
      <div class="section__hero-text">
        <h2 class="section__jumbo">
          {{ heroSection.title }}
        </h2>
        <div class="section__catch-phrase">
          (No this isn't a joke!)
        </div>
      </div>
      <a href="" class="button button--light">Learn More</a>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { RootState } from '@/store'
export default Vue.extend({
  computed: {
    ...mapState({
      heroSection: state => (state as RootState).heroSection
    }),
    computedStyle () {
      const image = this.heroSection.backgroundImage
      if (image === '') { return {} }
      return {
        'background-image': `url("${image}")`
      }
    }
  }
})
</script>
