<template>
  <div class="list-builder">
    <div class="list-builder__field-wrapper">
      <template v-for="(socialink, key) in mediaLinks">
        <div :key="key" class="list-builder__repeater">
          <div class="list-builder__tool">
            <div
              class="list-builder__title"
              :class="{
                'list-builder__title--single': mediaLinks.length === 1
              }"
              @click="expandControl(key)"
            >
              {{ socialink[title] | textOverflow }}
            </div>
            <div v-if="mediaLinks.length > 1" class="list-builder__icon" @click="deleteMedia(key)">
              <svg role="img" viewBox="0 0 320 512">
                <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class="" />
              </svg>
            </div>
          </div>
          <div
            class="list-builder__controls"
            :class="{
              'list-builder__controls--show': isActive && currentActive === key
            }"
          >
            <div class="list-builder__control">
              <slot name="title-field" :data="socialink">
                <label>Text</label>
                <input v-model="socialink[title]" type="text" :placeholder="socialink[title]" autocomplete="off">
              </slot>
            </div>
            <div class="list-builder__control">
              <slot name="value-field" :data="socialink">
                <label>Link</label>
                <input v-model="socialink[valueKey]" type="text" placeholder="https://your-link.com" autocomplete="off">
              </slot>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="list-builder__action">
      <button class="button" @click="addMedia">
        + Add Item
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from '@vue/composition-api'
import cloneDeep from 'lodash.clonedeep'

export default defineComponent({
  filters: {
    textOverflow (text:string) {
      if (text.length > 35) {
        return `${text.slice(0, 30)}...`
      }
      return text
    }
  },
  props: {
    list: {
      type: Array as PropType<Array<any>>,
      required: true
    },
    title: {
      type: String,
      default: 'title'
    },
    valueKey: {
      type: String,
      default: 'url'
    }
  },
  setup ({ list }) {
    const isActive = ref<boolean>(false)
    const currentActive = ref<Number>(0)
    const mediaLinks = ref<Array<any>>([])

    mediaLinks.value = cloneDeep(list)
    return {
      isActive,
      mediaLinks,
      currentActive
    }
  },
  watch: {
    list (list) {
      this.mediaLinks = cloneDeep(list)
    },
    mediaLinks: {
      handler () {
        this.$emit('links', this.filterMediaLinks())
      },
      deep: true
    }
  },
  methods: {
    expandControl (index:number) {
      if (this.currentActive === index && this.isActive === true) {
        this.isActive = false
      } else {
        this.currentActive = index
        this.isActive = true
      }
    },
    deleteMedia (index:number) {
      this.mediaLinks.splice(index, 1)
    },
    addMedia () {
      const media: Record<string, string> = {}
      media[this.title] = ''
      media[this.valueKey] = ''
      this.mediaLinks.push(media)
      this.expandControl(this.mediaLinks.length - 1)
    },
    filterMediaLinks () {
      return this.mediaLinks.filter((media) => {
        return media.title !== ''
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.list-builder {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__repeater {
    margin: 10px 0px;
    &:first-child {
      margin-top: 0px;
    }
  }
  &__tool {
    display: flex;
    background-color: #404349;
    color: #e0e1e3;
    align-items: center;
    height: 40px;
    border: 1px solid #64666a;
    line-height: normal;
    justify-content: space-between;
  }
  &__title {
    text-align: left;
    padding: 0 10px;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 1;
    width: calc(100% - 40px);
    &:hover {
      background: #464950;
    }
    &--single {
      width: 100%;
    }
  }
  &__icon {
    width: 40px;
    border-left: 1px solid #64666a;
    justify-content: center;
    flex-shrink: 0;
    &:hover {
      background: #464950;
    }
    svg {
      height: 13px;
    }
  }
  &__icon, &__title {
    height: 100%;
    transition: background 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  &__controls {
    border: 1px solid #64666a;;
    border-top: 0 solid #64666a;;
    padding-top: 15px;
    display: none;
    &--show {
      display: block;
    }
  }
  &__control {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    input, textarea {
      margin-top: 10px;
    }
  }
  &__action {
    display: flex;
    align-items: center;
    justify-content: center;
    .button {
      font-weight: 500;
      text-transform: uppercase;
      outline: none;
      border: none;
      border-radius: 3px;
      transition-property: background,color,box-shadow,opacity,-webkit-box-shadow;
      transition-duration: .3s;
      cursor: pointer;
      background-color: #64666a;
      color: #fff;
      font-size: 11px;
      padding: 7px 21px;
      line-height: normal;
      &:hover {
        background-color: #4c4f56;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.20);
      }
    }
  }
}
</style>
