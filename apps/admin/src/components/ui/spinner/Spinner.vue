<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/utils/style'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <IconRiLoaderLine role="status" aria-label="Loading" :class="cn('size-4 animate-spin', props.class)" />
</template>
