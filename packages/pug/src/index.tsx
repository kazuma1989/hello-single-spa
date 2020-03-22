import React from 'react'
import ReactDOM from 'react-dom'
import { insertStyleSheet } from './util'
import { App } from './App'

const root = document.getElementById('app-main')!

export async function mount() {
  const [remove, loading] = insertStyleSheet(
    'https://unpkg.com/bulma@0.8.0/css/bulma.min.css',
  )
  await loading

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
