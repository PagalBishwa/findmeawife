<template>
  <div class="image-upload" :class="{'image-upload--disabled': disabled}">
    <div
      class="image-upload__media-content image-upload__fit-aspect-ratio"
      :class="{
        'image-upload__media-content--empty': file === null,
        'image-upload__media-content--media': file !== null,
      }"
    >
      <input
        v-if="!reset"
        id="headerBackground101"
        type="file"
        accept="image/*"
        @change="handleFileChange"
      >
      <div class="image-upload__upload-button image-upload__fit-aspect-ratio">
        <svg role="img" viewBox="0 0 512 512">
          <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256C397.4 512 512 397.4 512 256S397.4 0 256 0zM352 280H280V352c0 13.2-10.8 24-23.1 24C242.8 376 232 365.2 232 352V280H160C146.8 280 136 269.2 136 256c0-13.2 10.8-24 24-24H232V160c0-13.2 10.8-24 24-24C269.2 136 280 146.8 280 160v72h72C365.2 232 376 242.8 376 256C376 269.2 365.2 280 352 280z" />
        </svg>
      </div>
      <div class="image-upload__media-area">
        <div class="image-upload__media-remove" title="Remove Image" @click="resetFile">
          <svg role="img" viewBox="0 0 448 512">
            <path fill="currentColor" d="M53.21 467c1.562 24.84 23.02 45 47.9 45h245.8c24.88 0 46.33-20.16 47.9-45L416 128H32L53.21 467zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z" />
          </svg>
        </div>
        <img :src="fileContent">
      </div>
      <div class="image-upload__label">
        Choose Image
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    image: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      file: null as any,
      fileReader: null as any,
      fileContent: '' as any,
      reset: false
    }
  },
  watch: {
    file (_file) {
      if (_file === null) { return }
      this.$emit('input', _file)
      this.readFile(_file)
    },
    fileContent (content) {
      this.$emit('content', content)
    }
  },
  beforeDestroy () {
    this.cleanReader()
  },
  methods: {
    handleFileChange (event: Event) {
      if ((event.target as HTMLInputElement).files && (event.target as HTMLInputElement).files !== null) {
        const files = (event.target as HTMLInputElement)?.files
        if (files === null) { return }
        this.file = files[0]
      }
    },
    readFile (file: File) {
      this.fileReader = new FileReader()
      this.fileReader.readAsDataURL(file)
      this.fileReader.onload = () => {
        this.fileContent = this.fileReader.result
      }
    },
    cleanReader () {
      if (this.fileReader) {
        this.fileReader.abort()
        this.fileReader = null
      }
    },
    resetFile () {
      this.file = null
      this.fileContent = ''
      this.cleanReader()

      this.reset = true
      this.$nextTick(() => {
        this.reset = false
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.image-upload {
  width: 100%;
  position: relative;
  border: 1px solid #64666a;
  &--disabled {
    &::after {
      content: "";
      background: #64666a;
      height: 100%;
      z-index: 5;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  input {
    position: absolute;
    top: -25%;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 150%;
    opacity: 0;
    cursor: pointer;
  }
  &__fit-aspect-ratio {
    position: relative;
    height: 0;
    cursor: pointer;
    overflow: hidden;
    padding-bottom: 42.8571%;
  }
  &__upload-button {
    background-color: #34383c;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #fff;
      height: 20px;
    }
  }
  &__label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 27px;
    background-color: #7d7e82;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    will-change: bottom;
    transition: bottom .2s ease-in-out;
  }
  &__media-area {
    img {
      object-fit: contain;
    }
  }
  &__media-remove {
    position: absolute;
    z-index: 3;
    top: 10px;
    right: 10px;
    font-size: 11px;
    color: #a4afb7;
    svg {
      width: 12px;
    }
  }
  &__media-content {
    z-index: 1;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      pointer-events: none;
    }
    &:hover {
      &::after {
        background-color: rgba(0,0,0,.2);
      }
    }
    &:not(:hover) {
      .image-upload__label {
        bottom: -30px;
      }
    }
    &--empty {
      .image-upload__media-area {
        display: none;
      }
    }
    &--media {
      .image-upload__upload-button {
        display: none;
      }
    }
  }
}
</style>
