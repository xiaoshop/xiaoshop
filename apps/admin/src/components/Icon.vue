<script lang="ts" setup>
import type { IconProps } from '@iconify/vue'
import { Icon } from '@iconify/vue'

const props = defineProps<IconProps>()
</script>

<template>
  <Icon v-bind="props" />
</template>
