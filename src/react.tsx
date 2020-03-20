import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

let mountTarget: HTMLElement

export async function bootstrap() {
  mountTarget = document.getElementById('react-root')!
}

export async function mount() {
  ReactDOM.render(<App />, mountTarget)
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(mountTarget)
}
