import {
  registerApplication,
  start,
} from 'https://unpkg.com/single-spa@5.2.0/lib/esm/single-spa.min.js'

registerApplication(
  'cycle-js',
  {
    async bootstrap() {},
    async mount() {
      import('/dist/cycle-js/index.js')
    },
    async unmount() {
      // TODO implementation
      // ;(await import('/dist/cycle-js/index.js')).unmount()
    },
  },
  location => location.pathname.startsWith('/cycle-js'),
)

registerApplication(
  'react',
  {
    async bootstrap() {},
    async mount() {
      import('/dist/react/index.js')
    },
    async unmount() {
      ;(await import('/dist/react/index.js')).unmount()
    },
  },
  location => location.pathname.startsWith('/react'),
)

start()
