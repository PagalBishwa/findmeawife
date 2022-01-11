<template>
  <div class="edit-panel edit-pannel--hero">
    <div class="edit-panel__heading">
      Hero Section
    </div>
    <div class="edit-panel__control">
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Title</label>
        <div class="edit-panel__field-wrapper">
          <textarea v-model="title" rows="5" placeholder="I'm Malik. Help me find a wife!" />
        </div>
      </div>
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Image</label>
        <div class="edit-panel__field-wrapper">
          <BuilderImageUpload v-model="file" @content="updateImage" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapMutations, mapState } from 'vuex'
// import { useThrottleFn } from '@vueuse/core'
import { RootState } from '@/store'
export default defineComponent({
  // setup (_, { root }) {
  //   const saveThrottledFn = useThrottleFn((value) => {
  //     root.$store.commit('setHeroSection', value)
  //   }, 400)
  //   return {
  //     saveThrottledFn
  //   }
  // },
  data () {
    return {
      title: '',
      file: null as any,
      backgroundImage: '',
      defaultTitle: "I'm Malik. Help me find a wife!"
    }
  },
  computed: {
    ...mapState({
      heroSection: state => (state as RootState).heroSection
    })
  },
  watch: {
    title (_title) {
      if (_title === '') {
        this.setHeroSection({
          title: this.defaultTitle,
          backgroundImage: this.backgroundImage
        })
      } else {
        this.save()
      }
    },
    backgroundImage () {
      this.save()
    }
  },
  methods: {
    ...mapMutations({
      setHeroSection: 'setHeroSection'
    }),
    updateImage (imageContent:string) {
      this.backgroundImage = imageContent
    },
    save () {
      this.setHeroSection({
        title: this.title ? this.title : this.defaultTitle,
        backgroundImage: this.backgroundImage
      })
    }
  }
})
</script>
