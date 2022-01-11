<template>
  <section
    class="section section--about-me"
    data-editable="true"
    :class="{'section--reverse': more}"
  >
    <div class="section__content">
      <div class="section__description">
        <h2 class="section__heading">
          {{ sectionData.title }}
        </h2>
        <p class="section__paragraph" v-html="sectionData.content" />
        <p v-if="!more" class="section__paragraph">
          <template v-for="(social, key) in sectionData.socialMedia">
            <a :key="key" :href="social.url" class="section__link" target="_blank" rel="nofollow">{{ social.title }}</a>
          </template>
        </p>
        <a href="" class="button">Find me a wife</a>
      </div>
      <div class="section__image">
        <img
          loading="lazy"
          :src="sectionData.image"
          alt=""
        >
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { RootState } from '@/store'
export default Vue.extend({
  props: {
    more: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      aboutSection: state => (state as RootState).aboutSection,
      moreSection: state => (state as RootState).moreSection
    }),
    sectionData () {
      return (this.more) ? this.moreSection : this.aboutSection
    }
  }
})
</script>
