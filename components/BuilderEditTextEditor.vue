<template>
  <section class="container">
    <client-only>
      <quill-editor
        ref="editor"
        v-model="content"
        :options="editorOption"
        :class="{
          'quill-editor--toolbar-less': !toolbar
        }"
      />
    </client-only>
  </section>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
export default {
  name: 'BuilderEditTextEditor',
  props: {
    value: {
      type: String,
      default: '<p>I am Example</p>'
    },
    toolbar: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      content: '<p>I am Example</p>'
    }
  },
  computed: {
    editorOption () {
      const editor = {
        theme: 'snow',
        modules: {
          toolbar: []
        }
      }
      if (this.toolbar) {
        editor.modules.toolbar.push(['bold', 'italic', 'underline'])
      }
      return editor
    }
  },
  watch: {
    value: {
      handler (value) {
        this.content = value
      },
      immediate: true
    },
    content (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    margin: 0 auto;

    .quill-editor {
      min-height: 100px;
      max-height: 400px;
      overflow-y: auto;
    }
  }
</style>
