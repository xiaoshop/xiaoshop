<script lang="ts" setup>
import { cn } from '~/utils/style'

const props = defineProps<{
  class?: any
}>()
</script>

<template>
  <nav :class="cn('flex-y-center h-full', props.class)">
    <slot />
  </nav>
</template>
