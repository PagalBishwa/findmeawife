<template>
  <div class="edit-panel edit-pannel--hero">
    <div class="edit-panel__heading">
      {{ sectionTitle }} Section
    </div>
    <div class="edit-panel__control">
      <div v-if="variant === 'more'" class="edit-panel__field">
        <label class="edit-panel__field-title edit-panel__field-title--enable">Enable
          <input v-model="isEnabled" type="checkbox">
        </label>
      </div>
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Title</label>
        <div class="edit-panel__field-wrapper">
          <textarea v-model="title" rows="5" :placeholder="defaultContent.title" :disabled="!isEnabled && isMore" />
        </div>
      </div>
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Image</label>
        <div class="edit-panel__field-wrapper">
          <BuilderImageUpload v-model="file" :disabled="!isEnabled && isMore" @content="updateImage" />
        </div>
      </div>
      <div class="edit-panel__field">
        <label class="edit-panel__field-title">Description</label>
        <div class="edit-panel__field-wrapper">
          <LazyBuilderEditTextEditor v-model="description" />
        </div>
      </div>
      <div v-if="variant === 'aboutme'" class="edit-panel__field">
        <label class="edit-panel__field-title">Social Media</label>
        <div class="edit-panel__field-wrapper">
          <BuilderEditList :list="socialMedias" />
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
  props: {
    variant: {
      type: String,
      default: 'aboutme',
      validate: (variant:string) => ['aboutme', 'more'].includes(variant)
    }
  },
  data () {
    return {
      title: '',
      file: null as any,
      image: '',
      isEnabled: true,
      description: '',
      socialMedias: [
        {
          title: 'Twitter',
          url: ''
        }
      ],
      isTriggred: false
    }
  },
  computed: {
    ...mapState({
      aboutSection: state => (state as RootState).aboutSection,
      moreSection: state => (state as RootState).moreSection
    }),
    sectionTitle ():string {
      return this.variant === 'aboutme' ? 'About Me' : 'More Info'
    },
    isMore ():boolean {
      return this.variant === 'more'
    },
    defaultContent ():Record<string, any> {
      const aboutDefault = {
        title: 'Who am I ?',
        image: 'https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c06e03716d30985094fa0b_IMG_2328.jpg',
        content: "I'm a 29-year-old Muslim guy living in London.<br><br>I'm blessed because I can combine my passions for Islam and entrepreneurship in what I do for a living.<br><br>I love food, good bants, and I know it sounds cheesy - but learning more about my own faith.",
        socialMedia: [
          {
            title: 'Twitter',
            url: ''
          },
          {
            title: 'Instagram',
            url: ''
          },
          {
            title: 'TikTok',
            url: ''
          }
        ]
      }
      const moreDefault = {
        isDisabled: false,
        title: "What I'm looking for",
        image: 'https://global-uploads.webflow.com/61bb44d33acabf87e3aa2031/61c08aa446a3994191871865_IMG_2326.jpg',
        content: 'I just haven\'t found the right girl yet. It\'s tough out there. I had to get a billboard to get seen!<br><br>My ideal partner would be a Muslim woman in her 20s, who\'s striving to better her deen. I\'m open to any ethnicity but I\'ve got a loud Punjabi family - so you\'d need to keep with the bants.<br><br>Always personality and faith over anything else!<br><br>P.S I\'m an only child and look after my mom and dad. If this is a deal-breaker I don\'t think it\'ll work out.'
      }
      return (this.variant === 'aboutme') ? aboutDefault : moreDefault
    }
  },
  watch: {
    title: 'save',
    image: 'save',
    description: 'save'
  },
  mounted () {
    this.description = (this.variant === 'aboutme') ? this.aboutSection.content : this.moreSection.content
    if (this.variant === 'aboutme') {
      this.socialMedias = this.aboutSection.socialMedia
    }
  },
  methods: {
    ...mapMutations({
      setAboutSection: 'setAboutSection',
      setMoreSection: 'setMoreSection'
    }),
    updateImage (imageContent:string) {
      this.image = imageContent
    },
    saveDefault (_video = true) {

    },
    save () {
      const payload:Record<string, any> = {
        title: this.title || this.defaultContent.title,
        image: this.image || this.defaultContent.image,
        content: this.description || this.defaultContent.content
      }
      if (this.variant === 'aboutme') {
        payload.socialMedia = this.socialMedias.length > 0 ? this.socialMedias : this.defaultContent.socialMedia
        this.setAboutSection(payload)
      } else {
        if (this.isEnabled === false) { return }
        this.setMoreSection(payload)
      }
    }
  }
})
</script>
