<template>
  <section class="section section--form" data-editable="true">
    <div class="section__content">
      <h2 class="section__heading">
        {{ formSection.title }}
      </h2>
      <p v-html="formSection.description" />
      <div class="section__form">
        <WifeForm :description="formSection.form.description" :more-about="formSection.form.moreAbout" />
      </div>
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
      formSection: state => (state as RootState).formSection
    })
  }
})
</script>
