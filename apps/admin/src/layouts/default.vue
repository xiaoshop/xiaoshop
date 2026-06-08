<script lang="ts" setup>
defineOptions({
  name: 'DefaultLayout',
})
</script>

<template>
  <UiTooltipProvider :delay-duration="100">
    <div class="flex flex-col h-full">
      <LayoutHeader />
      <div class="relative grow">
        <RouterView />
      </div>
    </div>
  </UiTooltipProvider>
</template>
