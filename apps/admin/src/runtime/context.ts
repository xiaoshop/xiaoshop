import type { VueHeadClient } from '@unhead/vue'
import type { Pinia } from 'pinia'
import type { App, Component } from 'vue'
import type { Router, RouteRecordRaw } from 'vue-router'
import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp as createClientApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import { installMiddlewares } from './middleware'
import { installPlugins } from './plugin'

export interface RuntimeContext {
  app: App<Element>
  router: Router
  routes: Readonly<RouteRecordRaw[]>
  head: VueHeadClient
  store: Pinia
}

export interface RuntimeCallback {
  (ctx: RuntimeContext): void | Promise<void>
}

export interface RuntimeOptions {
  /**
   * The root container to mount the app into.
   *
   * @default '#app'
   */
  rootContainer?: string | Element
}

export function createRuntime(
  App: Component,
  fn?: RuntimeCallback,
  options?: RuntimeOptions,
) {
  const {
    rootContainer = '#app',
  } = options ?? {}

  async function createApp() {
    const app = createClientApp(App)
    const head = createHead()
    const store = createPinia()

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
      routes: setupLayouts(routes),
    })

    const context: RuntimeContext = {
      app,
      head,
      store,
      router,
      routes,
    }

    installPlugins(context)
    installMiddlewares(context)

    app.use(head)
    app.use(store)
    app.use(router)

    await fn?.(context)

    return context
  }

  (async () => {
    const { app, router } = await createApp()

    app.mount(rootContainer)

    await router.isReady()
    if (import.meta.hot) {
      handleHotUpdate(router)
    }
  })()

  return createApp
}
