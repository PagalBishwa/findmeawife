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
import { RootState } from '@/store'
export default defineComponent({
  data () {
    return {
      title: '',
      description: ''
    }
  },
  computed: {
    ...mapState({
      formSection: state => (state as RootState).formSection
    })
  },
  watch: {
  },
  mounted () {
    this.description = this.formSection.description
  },
  methods: {
    ...mapMutations({
      setFormSection: 'setFormSection'
    })
  }
})
</script>
