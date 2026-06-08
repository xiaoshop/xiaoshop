<script lang="ts" setup>
import type { ConnectionStatus } from '@xiaoshop/contracts'

const status = ref<ConnectionStatus>('disconnected')
</script>

<template>
  <LayoutHeaderPopover class="w-100">
    <LayoutConnectionIcon :status="status" />
    <template #content>
      <UiItem class="items-start">
        <UiItemMedia>
          <UiAvatar class="size-9">
            <UiAvatarImage src="https://github.com/evilrabbit.png" />
            <UiAvatarFallback>云链</UiAvatarFallback>
          </UiAvatar>
        </UiItemMedia>
        <UiItemContent>
          <UiItemTitle>云链测试</UiItemTitle>
          <UiItemDescription class="flex items-center gap-1 leading-none">
            <span>
              sk-xxx-1234567890
            </span>
            <Icon icon="ri-file-copy-line" class="size-3 cursor-pointer" />
          </UiItemDescription>
        </UiItemContent>
        <UiItemActions class="items-start">
          <LayoutConnectionStatus :status="status" />
        </UiItemActions>
      </UiItem>

      <div class="flex justify-between px-6 py-4 rounded-xs border">
        <UiStatistic label="云链" value="-" />
        <UiStatistic label="待处理消息" value="-" />
        <UiStatistic label="待处理同步" value="-" />
      </div>

      <UiButton variant="secondary">
        <Icon icon="ri-wifi-line" class="size-4" />
        连接
      </UiButton>
    </template>
  </LayoutHeaderPopover>
</template>
