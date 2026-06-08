import type { RuntimeCallback, RuntimeContext } from './context'

export interface PluginHandler {
  (ctx: RuntimeContext): void
}

export function definePlugin(handler: PluginHandler): RuntimeCallback {
  return (ctx) => {
    try {
      handler(ctx)
    }
    catch (error) {
      console.error(error)
    }
  }
}

export function installPlugins(ctx: RuntimeContext) {
  const plugins = import.meta.glob<RuntimeCallback>('~/plugins/**/install.ts', {
    eager: true,
    import: 'default',
  })

  for (const plugin of Object.values(plugins)) {
    plugin(ctx)
  }
}
