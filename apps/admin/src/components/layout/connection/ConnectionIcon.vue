<script lang="ts" setup>
import type { ConnectionStatus } from '@xiaoshop/contracts'
import { cn } from '~/utils/style'

const props = defineProps<{
  status?: ConnectionStatus
  class?: any
}>()

const icon = computed(() => {
  switch (props.status) {
    case 'connected':
      return 'ri-wifi-line'
    case 'connecting':
      return 'ri-loader-line'
    case 'error':
      return 'ri-close-circle-line'
    default:
      return 'ri-wifi-off-line'
  }
})
</script>

<template>
  <Icon :icon="icon" :class="cn('size-4', status === 'connecting' && 'animate-spin', props.class)" />
</template>
