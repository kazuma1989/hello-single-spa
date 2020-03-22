import {
  registerApplication,
  start,
} from 'https://unpkg.com/single-spa@5.2.0/lib/esm/single-spa.min.js'
import { insertScript } from './util.js'

registerApplication(
  'app-nav',
  {
    async bootstrap() {
      await insertScript('/dist/react/vendors.js')
      await insertScript('/dist/react/nav.js')
    },

    async mount() {
      window['app-react'].nav.mount()
    },

    async unmount() {
      window['app-react'].nav.unmount()
    },
  },
  location => location.pathname.startsWith('/'),
)

registerApplication(
  'app-cycle-js',
  {
    async bootstrap() {
      await insertScript('/dist/cycle-js/index.js')
    },

    async mount() {
      window['app-cycle-js'].mount()
    },

    async unmount() {
      window['app-cycle-js'].unmount()
    },
  },
  location => location.pathname.startsWith('/cycle-js/'),
)

registerApplication(
  'app-react',
  {
    async bootstrap() {
      await insertScript('/dist/react/vendors.js')
      await insertScript('/dist/react/index.js')
    },

    async mount() {
      window['app-react'].index.mount()
    },

    async unmount() {
      window['app-react'].index.unmount()
    },
  },
  location => location.pathname.startsWith('/react/'),
)

start()
