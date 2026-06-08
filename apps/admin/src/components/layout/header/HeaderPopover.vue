<script lang="ts" setup>
import { cn } from '~/utils/style'

const props = defineProps<{
  class?: any
}>()
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <LayoutHeaderButton>
        <slot />
      </LayoutHeaderButton>
    </UiPopoverTrigger>
    <UiPopoverContent align="end" :side-offset="0" :class="cn('w-100 gap-3', props.class)">
      <slot name="content" />
    </UiPopoverContent>
  </UiPopover>
</template>
