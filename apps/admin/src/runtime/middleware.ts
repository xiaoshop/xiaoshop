import type { NavigationGuard, RouteLocationNormalized } from 'vue-router'
import type { RuntimeCallback, RuntimeContext } from './context'

export interface MiddlewareHandler {
  (to: RouteLocationNormalized, from: RouteLocationNormalized): ReturnType<NavigationGuard>
}

export function defineMiddleware(handler: MiddlewareHandler): RuntimeCallback {
  return ({ router }) => {
    router.beforeEach((to, from, next) => {
      if (!handler(to, from)) {
        next()
      }
    })
  }
}

export function installMiddlewares(ctx: RuntimeContext) {
  const middlewares = import.meta.glob<RuntimeCallback>('~/middleware/*.ts', {
    eager: true,
    import: 'default',
  })

  for (const middleware of Object.values(middlewares)) {
    middleware(ctx)
  }
}
