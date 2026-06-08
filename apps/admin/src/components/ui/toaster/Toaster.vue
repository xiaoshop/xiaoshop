<script lang="ts" setup>
import type { ToasterProps } from 'vue-sonner'
import { Toaster } from 'vue-sonner'
import { cn } from '~/utils/style'

const props = defineProps<ToasterProps>()
</script>

<template>
  <Toaster
    :class="cn('toaster group', props.class)"
    :style="{
      '--normal-bg': 'var(--popover)',
      '--normal-text': 'var(--popover-foreground)',
      '--normal-border': 'var(--border)',
      '--border-radius': 'var(--radius)',
      '--gray2': 'hsl(var(--popover) / 0.9)',
      '--gray3': 'var(--border)',
      '--gray4': 'var(--border)',
      '--gray5': 'var(--border)',
      '--gray12': 'var(--popover-foreground)',
    }"
    v-bind="props"
    :toast-options="{
      classes: {
        toast: 'rounded-none',
      },
    }"
  >
    <template #success-icon>
      <IconRiCheckboxCircleLine class="size-4" />
    </template>
    <template #info-icon>
      <IconRiInformation2Line class="size-4" />
    </template>
    <template #warning-icon>
      <IconRiAlertLine class="size-4" />
    </template>
    <template #error-icon>
      <IconRiCloseCircleLine class="size-4" />
    </template>
    <template #loading-icon>
      <div>
        <IconRiLoaderLine class="size-4 animate-spin" />
      </div>
    </template>
    <template #close-icon>
      <IconRiCloseLine class="size-4" />
    </template>
  </Toaster>
</template>
