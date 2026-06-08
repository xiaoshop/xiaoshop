<script lang="ts" setup>
import type { RouterLinkProps } from 'vue-router'
import { cn } from '~/utils/style'

export type HeaderLinkProps = RouterLinkProps & { tooltip?: string, class?: any }

const props = defineProps<HeaderLinkProps>()
</script>

<template>
  <UiTooltip :disabled="!tooltip">
    <UiTooltipTrigger as-child>
      <RouterLink
        v-bind="props"
        :class="cn(
          'flex-y-center gap-2 text-foreground/90 text-xs px-4 h-full transition-colors hover:bg-accent hover:text-foreground',
          props.class,
        )"
        :active-class="cn('font-semibold text-foreground', props.activeClass)"
      >
        <slot />
      </RouterLink>
    </UiTooltipTrigger>
    <UiTooltipContent side="bottom">
      <slot name="tooltip">
        {{ tooltip }}
      </slot>
    </UiTooltipContent>
  </UiTooltip>
</template>
