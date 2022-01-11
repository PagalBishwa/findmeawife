<template>
  <div class="edit-panel edit-pannel--hero">
    <div class="edit-panel__heading">
      Video Section
    </div>
    <div class="edit-panel__control">
      <div class="edit-panel__field">
        <label class="edit-panel__field-title edit-panel__field-title--enable">Enable
          <input v-model="isEnabled" type="checkbox">
        </label>
      </div>
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Title</label>
        <div class="edit-panel__field-wrapper">
          <textarea v-model="title" rows="5" placeholder="The man behind the billboard" :disabled="!isEnabled" />
        </div>
      </div>
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Video Url</label>
        <div class="edit-panel__field-wrapper">
          <input v-model="videoUrl" type="text" placeholder="https://www.youtube.com/embed/buhz4OnuPZ0" :disabled="!isEnabled">
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
      videoUrl: '',
      isEnabled: true,
      defaultTitle: 'The man behind the billboard',
      defaultVideoUrl: 'https://www.youtube.com/embed/buhz4OnuPZ0'
    }
  },
  computed: {
    ...mapState({
      videoSection: state => (state as RootState).videoSection
    })
  },
  watch: {
    title (_title) {
      if (_title === '') {
        this.saveDefault()
      } else {
        this.save()
      }
    },
    videoUrl (_video) {
      if (_video === '') {
        this.saveDefault()
      } else {
        this.save()
      }
    },
    isEnabled (_) {
      this.save()
    }
  },
  methods: {
    ...mapMutations({
      setVideoSection: 'setVideoSection'
    }),
    saveDefault (video = true) {
      const payload = {
        title: this.defaultTitle,
        isDisabled: !this.isEnabled,
        videoUrl: this.videoUrl ? this.videoUrl : this.defaultVideoUrl
      }
      if (video === false) {
        payload.title = this.title ? this.title : this.defaultTitle
        payload.videoUrl = this.defaultVideoUrl
      }
      this.setVideoSection(payload)
    },
    save () {
      this.setVideoSection({
        isDisabled: !this.isEnabled,
        title: this.title ? this.title : this.defaultTitle,
        videoUrl: this.videoUrl ? this.videoUrl : this.defaultVideoUrl
      })
    }
  }
})
</script>
