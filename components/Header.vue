<template>
  <component :is="header" />
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'AppHeader',
  setup (_, { root }) {
    const route = root.$route
    const header = ref<string>('LandingHeader')
    if (route.name !== 'index') {
      header.value = 'FindHeader'
    }
    return {
      header
    }
  }
})
</script>
