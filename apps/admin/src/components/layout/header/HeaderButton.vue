<script lang="ts" setup>
import { cn } from '~/utils/style'

const props = defineProps<{
  tooltip?: string
  class?: any
}>()
</script>

<template>
  <button
    :class="cn(
      'flex-y-center gap-2 text-foreground/90 text-xs px-4 h-full transition-colors hover:bg-accent hover:text-foreground',
      props.class,
    )"
  >
    <slot />
  </button>
</template>
