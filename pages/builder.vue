<template>
  <div class="flex builder-page">
    <div class="builder">
      <div class="builder__header">
        <div class="builder__header-title">
          Edit Section
        </div>
      </div>
      <div class="builder__editor">
        <template v-if="editSelection === ''">
          <span class="builder__editor-info-text">Select Section to Edit.</span>
        </template>
        <template v-else>
          <component :is="editSelection" />
        </template>
      </div>
      <div class="builder__footer" />
    </div>
    <div class="layout__root">
      <FindHeader />
      <main class="main">
        <div class="section-wrapper" @click="edit('Hero')">
          <div class="section__edit" @click="edit('Hero')" />
          <SectionHero />
        </div>
        <div class="section-wrapper" @click="edit('Video')">
          <div class="section__edit" @click="edit('Video')" />
          <SectionVideo />
        </div>
        <div class="section-wrapper" @click="edit('AboutMe')">
          <div class="section__edit" @click="edit('AboutMe')" />
          <SectionAboutMe />
        </div>
        <div class="section-wrapper" @click="edit('MoreInfo')">
          <div class="section__edit" @click="edit('MoreInfo')" />
          <SectionAboutMe v-if="!moreSection.isDisabled" :more="true" />
        </div>
        <div class="section-wrapper" @click="edit('Faq')">
          <div class="section__edit" @click="edit('Faq')" />
          <SectionFaq />
        </div>
        <div class="section-wrapper" @click="edit('Form')">
          <div class="section__edit" @click="edit('Form')" />
          <SectionForm />
        </div>
        <div class="section-wrapper ">
          <SectionCopyright />
        </div>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { RootState } from '@/store/index'
export default Vue.extend({
  name: 'PageBuilder',
  layout: 'headless',
  data () {
    return {
      editSelection: ''
    }
  },
  computed: {
    ...mapState({
      videoSection: state => (state as RootState).videoSection,
      moreSection: state => (state as RootState).moreSection
    })
  },
  methods: {
    edit (component:string) {
      this.editSelection = `LazyBuilderEdit${component}`
    }
  }
})
</script>
<style lang="scss" scoped>
.builder-page {
  .builder {
    width: 320px;
    flex-shrink: 0;
    background: #404349;
    position: relative;
    &__header {
      background: #26292c;
      display: table;
      height: 40px;
      width: 100%;
      color: #fff;
      &-title {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
    }
    &__editor {
      flex-grow: 1;
      height: calc(100% - 80px);
      overflow: hidden;
      overflow-y: auto;
    }
    &__editor-info-text {
      color: #fff;
      padding: 10px;
      display: flex;
      justify-content: center;
      flex-grow: 1;
      font-size: 12px;
    }
    &__footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40px;
      background-color: #26292c;
    }
  }
  .layout__root {
    overflow-y: scroll;
    flex-grow: 1;
  }

  .builder, .layout__root {
    height: 100vh;
  }
  .main {
    margin-right: 30px;
    margin-left: 30px;
    position: relative;
  }
  .section-wrapper {
    border: 1px solid transparent;
    position: relative;
  }
  .section__edit {
    --height: 20px;
    position: absolute;
    height: var(--height);
    width: var(--height);
    background-image: url('@/static/icons/edit.svg');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0;
    right: 0;
    z-index: 1;
    cursor: pointer;
  }
  .section-wrapper:hover {
    .section__edit {
      opacity: 1;
    }
    *[data-editable="true"] {
      border: 1px solid #10bcf2;
    }
  }
}
</style>
<style lang="scss">
@import "@/assets/scss/section";
@import "@/assets/scss/edit";
.builder-page .layout__root *[data-editable="true"]  {
  position: relative;
  border: 1px solid transparent;
  &[data-editing="true"], &:hover {
    border: 1px solid #10bcf2;
    &::after {
      opacity: 1;
    }
  }
}
</style>
