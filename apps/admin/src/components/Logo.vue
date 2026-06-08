<script setup lang="ts">
const props = defineProps<{
  width?: number
  height?: number
}>()
</script>

<template>
  <svg :width="props.width ?? 24" :height="props.height ?? 24" viewBox="0 0 24 24" fill="none" class="[&>path]:fill-foreground">
    <path d="M5.4 18.6H18.6V14.2H23V20.8C23 22.015 22.015 23 20.8 23H3.2C1.98497 23 1 22.015 1 20.8V14.2H5.4V18.6Z" />
    <path d="M9.8 14.2H5.4V9.8H9.8V14.2Z" />
    <path d="M18.6 14.2H14.2V9.8H18.6V14.2Z" />
    <path d="M20.8 1C22.015 1 23 1.98497 23 3.2V9.8H18.6V5.4H5.4V9.8H1V3.2C1 1.98497 1.98497 1 3.2 1H20.8Z" />
  </svg>
</template>
