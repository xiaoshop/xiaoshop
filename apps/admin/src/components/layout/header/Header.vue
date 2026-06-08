<script lang="ts" setup>
import type { HeaderLinkProps } from './HeaderLink.vue'

defineProps<{
  items?: HeaderLinkProps[]
}>()
</script>

<template>
  <header class="bg-card border-b">
    <div class="flex-y-center h-(--layout-header-height)">
      <h1 class="flex-center size-(--layout-header-height)">
        <Logo />
      </h1>
      <LayoutHeaderNav class="grow">
        <LayoutHeaderLink to="/" tooltip="前往控制台">
          <IconRiHome5Line class="size-4" />
          控制台
        </LayoutHeaderLink>
        <template v-if="items && items.length > 0">
          <UiSeparator orientation="vertical" class="h-4 my-auto" />
          <LayoutHeaderLink
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
            :tooltip="item.tooltip"
          />
        </template>
      </LayoutHeaderNav>
      <LayoutHeaderNav>
        <slot name="links" />
        <LayoutHeaderLink to="/">
          <IconRiWifiOffLine class="size-4" />
        </LayoutHeaderLink>
        <LayoutHeaderLink to="/">
          <IconRiNotificationLine class="size-4" />
        </LayoutHeaderLink>
      </LayoutHeaderNav>
    </div>
  </header>
</template>
