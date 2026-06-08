<script lang="ts" setup>
import type { ConnectionStatus } from '@xiaoshop/contracts'
import { cn } from '~/utils/style'
import { connectionStatusVariants } from './ConnectionStatus.styles'

const props = withDefaults(defineProps<{
  status?: ConnectionStatus
  class?: any
}>(), {
  status: 'disconnected',
})

const statusText = computed(() => {
  switch (props.status) {
    case 'connected':
      return '已连接'
    case 'connecting':
      return '连接中'
    case 'error':
      return '连接失败'
    default:
      return '未连接'
  }
})
</script>

<template>
  <span :class="cn(connectionStatusVariants({ status }), props.class)">
    <LayoutConnectionIcon :status="status" class="size-2.5" />
    {{ statusText }}
  </span>
</template>
