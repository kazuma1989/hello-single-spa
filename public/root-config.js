import {
  registerApplication,
  start,
} from 'https://unpkg.com/single-spa@5.2.0/lib/esm/single-spa.min.js'
import { insertScript } from './util.js'

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
      await insertScript('/dist/react/vendors~index.js')
      await insertScript('/dist/react/index.js')
    },

    async mount() {
      window['app-react'].mount()
    },

    async unmount() {
      window['app-react'].unmount()
    },
  },
  location => location.pathname.startsWith('/react/'),
)

const shadowRoot = document
  .getElementById('app-host')
  .attachShadow({ mode: 'open' })
shadowRoot.innerHTML = `
  <div id="app-root"></div>
`

start()
