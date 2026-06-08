<script lang="ts" setup>
defineProps<{
  label: string
  value: string
  description?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1 text-xs text-muted-foreground">
    <span>{{ label }}</span>
    <span class="text-lg text-foreground font-bold">{{ value }}</span>
    <span v-if="description">{{ description }}</span>
  </div>
</template>
