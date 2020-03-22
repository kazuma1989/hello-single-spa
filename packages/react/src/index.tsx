import React from 'react'
import ReactDOM from 'react-dom'
import { insertStyleSheet } from './util'
import { App } from './App'

const shadowRoot = document.getElementById('app-host')!.shadowRoot!

export async function mount() {
  const [remove, loading] = insertStyleSheet(
    'https://unpkg.com/bulma@0.8.0/css/bulma.min.css',
    shadowRoot,
  )
  await loading

  const root = shadowRoot.getElementById('app-root')!
  ReactDOM.render(<App />, root)

  _unmount = () => {
    ReactDOM.unmountComponentAtNode(root)
    remove()
  }
}

let _unmount: () => void
export async function unmount() {
  _unmount()
}
