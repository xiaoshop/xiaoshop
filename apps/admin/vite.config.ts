import path from 'node:path'
import Tailwindcss from '@tailwindcss/vite'
import { unheadVueComposablesImports } from '@unhead/vue'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import MagicString from 'magic-string'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'
import { VueRouterAutoImports } from 'vue-router/unplugin'
import VueRouter from 'vue-router/vite'
import { homepage, repository, version } from './package.json'

export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 3000,
  },

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~~': path.resolve(__dirname, '.'),
    },
  },

  oxc: {
    target: 'esnext',
    pure: mode === 'production' ? ['console.log', 'debugger'] : [],
  },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },

  plugins: [
    // https://github.com/vuejs/router
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),

    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
    Vue(),

    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx
    VueJsx(),

    // https://github.com/vue-macros/vue-macros/tree/main/packages/define-options
    DefineOptions(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [/\.[jt]sx?$/, /\.vue$/],
      imports: [
        'vue',
        VueRouterAutoImports,
        unheadVueComposablesImports,
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
      extensions: ['vue'],
      include: [/\.vue$/],
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      dts: 'src/components.d.ts',
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
      resolvers: [
        IconsResolver({
          componentPrefix: 'icon',
        }),
      ],
    }),

    // https://github.com/tailwindlabs/tailwindcss/tree/main/packages/@tailwindcss-vite
    Tailwindcss({
      optimize: { minify: false },
    }),

    // https://github.com/unplugin/unplugin-icons
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),

    // https://github.com/vuejs/devtools
    mode === 'development' ? VueDevTools() : undefined,

    // Purge comments
    {
      name: 'purge-comments',
      enforce: 'pre',
      transform: (code, id) => {
        if (!id.endsWith('.vue') || !code.includes('<!--'))
          return

        const s = new MagicString(code)
        // eslint-disable-next-line regexp/no-useless-non-capturing-group, regexp/sort-flags
        s.replace(/<!--(?:.*?)-->/sg, '')

        if (s.hasChanged()) {
          return {
            code: s.toString(),
            map: s.generateMap({ source: id, includeContent: true }),
          }
        }
      },
    },
  ],

  define: {
    __VERSION__: JSON.stringify(version),
    __HOMEPAGE__: JSON.stringify(homepage),
    __REPOSITORY__: JSON.stringify(repository.url),
  },
}))
