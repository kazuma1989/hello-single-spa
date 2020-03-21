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
  location => location.pathname.startsWith('/react'),
)

start()

async function insertScript(src, parent = document.head) {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.onload = resolve

    script.async = true
    script.src = src

    parent.appendChild(script)
  })
}
