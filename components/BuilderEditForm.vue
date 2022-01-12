<template>
  <div class="edit-panel edit-pannel--hero">
    <div class="edit-panel__heading">
      Form Section
    </div>
    <div class="edit-panel__control">
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Title</label>
        <div class="edit-panel__field-wrapper">
          <textarea v-model="title" rows="5" placeholder="Hey soul sister, let's chat" />
        </div>
      </div>
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Description</label>
        <div class="edit-panel__field-wrapper">
          <BuilderEditTextEditor v-model="description" class="mt-10" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapMutations, mapState } from 'vuex'
import cloneDeep from 'lodash.clonedeep'
import { RootState } from '@/store'
export default defineComponent({
  data () {
    return {
      title: '',
      description: '',
      defaultValues: {
        title: "Hey soul sister, let's chat",
        description: "I'm overwhelmed and blessed by the positive response so far. I want to thank everyone, even those of you just wanting to wish me good luck!<br><br>Inshallah I can reply to all the genuine applications (I fully intend to!). Please bear with me, Allah SWT has blessed me with a lot more help on my search than I expected.",
        form: {
          description: "Think you're the one for me? Apply here and tell me a bit about yourself.",
          moreAbout: 'Tell me a bit about yourself (like your age, job, are you practising etc.)'
        }
      }
    }
  },
  computed: {
    ...mapState({
      formSection: state => (state as RootState).formSection
    })
  },
  watch: {
    title: 'save',
    description: 'save'
  },
  mounted () {
    this.description = cloneDeep(this.formSection.description)
  },
  methods: {
    ...mapMutations({
      setFormSection: 'setFormSection'
    }),
    save () {
      const payload = {
        title: this.title || this.defaultValues.title,
        description: this.description || this.defaultValues.description,
        form: this.defaultValues.form
      }
      this.setFormSection(payload)
    }
  }
})
</script>
