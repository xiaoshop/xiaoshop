import path from 'node:path'
import { DevTools } from '@vitejs/devtools'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueRouter from 'vue-router/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    // https://github.com/vuejs/router
    VueRouter(),

    // https://github.com/vuejs/core
    Vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [/\.[jt]sx?$/, /\.vue$/],
      imports: [
        'vue',
        {
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      include: [/\.vue$/],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/vitejs/devtools
    DevTools(),
  ],
})
