<template>
  <section class="section section--video" data-editable="true">
    <div class="section__content">
      <h2 class="section__heading">
        {{ videoSection.title }}
      </h2>
      <div class="section__embed">
        <div class="section__youtube">
          <iframe
            loading="lazy"
            :src="videoSection.videoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="section__video-youtube"
          />
        </div>
      </div>
      <div class="divider" />
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
      videoSection: state => (state as RootState).videoSection
    })
  }
})
</script>
