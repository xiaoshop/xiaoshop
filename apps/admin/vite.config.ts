import Tailwindcss from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'vue-router/vite'

export default defineConfig(({ mode }) => ({
  resolve: {
    tsconfigPaths: true,
  },

  plugins: [
    // https://github.com/vuejs/router
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),

    // https://github.com/vuejs/core
    Vue(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

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

    // https://github.com/tailwindlabs/tailwindcss/tree/main/packages/@tailwindcss-vite
    Tailwindcss({
      optimize: { minify: false },
    }),

    // https://github.com/vuejs/devtools
    mode === 'development' ? VueDevTools() : undefined,
  ],
}))
