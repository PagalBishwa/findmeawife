<template>
  <section class="section section--faq" data-editable="true">
    <div class="section__content">
      <h2 class="section__heading">
        {{ faqSection.title }}
      </h2>
      <ul role="list" class="section__faqs">
        <template v-for="(faq, key) in faqSection.faqs">
          <li :key="key">
            <strong>{{ faq.question }}</strong>
            <span v-html="faq.answer" />
          </li>
        </template>
      </ul>
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
      faqSection: state => (state as RootState).faqSection
    })
  }
})
</script>
