<template>
  <div class="edit-panel edit-pannel--hero">
    <div class="edit-panel__heading">
      FAQ Section
    </div>
    <div class="edit-panel__control">
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Title</label>
        <div class="edit-panel__field-wrapper">
          <textarea v-model="title" rows="5" placeholder="FAQs" />
        </div>
      </div>
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Faqs</label>
        <div class="edit-panel__field-wrapper">
          <BuilderEditList :list="faqs" title="question" value-key="answer">
            <template #title-field="{ data }">
              <label>Text</label>
              <textarea v-model="data.question" rows="5" placeholder="Question" />
            </template>
            <template #value-field="{ data }">
              <label>Text</label>
              <BuilderEditTextEditor v-model="data.answer" :toolbar="false" class="mt-10" />
            </template>
          </BuilderEditList>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapMutations, mapState } from 'vuex'
import { RootState } from '@/store'
export default defineComponent({
  data () {
    return {
      title: '',
      faqs: [{
        question: 'Is this a joke?',
        answer: "Nope, I'm serious. I've been searching for a partner who'll work with me to grow our love for each other and Allah. If this sounds like you please get in touch."
      }],
      defaultValues: {
        title: 'FAQs',
        faqs: [
          {
            question: 'Is this a joke?',
            answer: "Nope, I'm serious. I've been searching for a partner who'll work with me to grow our love for each other and Allah. If this sounds like you please get in touch."
          },
          {
            question: 'Are you against arranged marriage?',
            answer: 'Not at all! I think arranged marriages have a place and tradition in many Islamic cultures. In fact, there are many studies that show that arranged marriages have many advantages.<br>I just want to try and find someone on my own first.'
          },
          {
            question: "I know someone who'd be perfect for you, what should I do?",
            answer: "Amazing! Feel free to use the form below to let me know more about them. Just make sure they're looking for a husband and are aware."
          }
        ]
      }

    }
  },
  computed: {
    ...mapState({
      faqSection: state => (state as RootState).faqSection
    })
  },
  watch: {
  },
  mounted () {
    this.faqs = this.faqSection.faqs
  },
  methods: {
    ...mapMutations({
      setHeroSection: 'setHeroSection'
    }),
    save () {
    }
  }
})
</script>
<style lang="scss" scoped>
.edit-panel__field-wrapper {
  .mt-10 {
    margin-top: 10px;
  }
}

</style>
