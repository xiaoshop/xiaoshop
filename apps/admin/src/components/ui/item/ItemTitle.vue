<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/utils/style'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="item-title"
    :class="cn('gap-2 text-sm font-medium underline-offset-4 line-clamp-1 flex w-fit items-center', props.class)"
  >
    <slot />
  </div>
</template>
