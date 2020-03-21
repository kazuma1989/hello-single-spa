import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

const mountTarget = document.getElementById('root')!

export async function mount() {
  ReactDOM.render(<App />, mountTarget)
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(mountTarget)
}
