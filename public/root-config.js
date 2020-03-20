import {
  registerApplication,
  start,
} from 'https://unpkg.com/single-spa@5.2.0/lib/esm/single-spa.min.js'

// registerApplication(
//   'app1',
//   () => import('./app1'),
//   location => location.pathname.startsWith('/app1'),
// )

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
