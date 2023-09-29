<template>
  <Tutorial />
</template>

<script lang="ts">
import { Context } from '@nuxt/types'

export default {
  middleware({ redirect }: Context) {
    // 重定向到 /js 页面
    redirect('/js')
  },
}
</script>
