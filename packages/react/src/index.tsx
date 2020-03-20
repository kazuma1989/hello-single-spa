import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

const mountTarget = document.getElementById('root')!

ReactDOM.render(<App />, mountTarget)

export async function unmount() {
  ReactDOM.unmountComponentAtNode(mountTarget)
}
