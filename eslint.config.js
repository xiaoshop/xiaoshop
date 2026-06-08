import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  formatters: true,
}, {
  files: ['apps/**/*.ts'],
  settings: {
    'import/core-modules': ['vue-router/auto-routes'],
  },
}, {
  rules: {
    'ts/no-redeclare': 'off',
  },
})
